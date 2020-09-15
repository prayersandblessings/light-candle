import { NextApiRequest, NextApiResponse  } from 'next';
const md5 = require("md5");

const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID;
const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX;

const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
  apiKey: MAILCHIMP_API_KEY,
  server: MAILCHIMP_SERVER_PREFIX,
});

const getErrorResponse = (res,message) => {
  res.status(404).json({
    error: {
      code: "not_found",
      message,
    },
  });
}

export const subscribeUser = async ({
  data,
  blessingDayAccepted = false,
  regularMailingAccepted = false,
  email,
  res,
  }
) => {
  try {
    const subscriberHash = md5(email.toLowerCase());
    let response = await mailchimp.lists.setListMember(
      MAILCHIMP_LIST_ID,
      subscriberHash,
      data
    );

    const body = { tags: [] };

    if (blessingDayAccepted) {
      body.tags.push({
        name: "BlessingADay",
        status: "active",
      });
    }

    if (regularMailingAccepted) {
      body.tags.push({
        name: "RegularMailingList",
        status: "active",
      });
    }

    response = await mailchimp.lists.updateListMemberTags(
      MAILCHIMP_LIST_ID,
      subscriberHash,
      {
        body,
      }
    );

    return res.status(200).json({ sent: true, response });
  } catch (e) {
    if (e.status === 404) {
      const message = "This email is not subscribed to this list";
      console.error(message, e);
      return getErrorResponse(res, message);
    }
    console.error(e);
    return getErrorResponse(res, "Unnespected error");
  }
}

export default async (req, res) => {
  if (req.method === "POST") {
    const { email, name, surname, blessingDayAccepted, regularMailingAccepted } = req.body;
    if (!email || !name || !surname) {
      return getErrorResponse(getErrorResponse, 'Incorrect params')
    }

    // 5. The status of 'subscribed' is equivalent to a double opt-in.
    const data = {
      email_address: email,
      merge_fields: {
        FNAME: name,
        LNAME: surname,
      },
      status_if_new: "subscribed",
    };

    return subscribeUser({data, blessingDayAccepted, regularMailingAccepted, email, res});
  }

  return getErrorResponse(res, 'The requested endpoint was not found or doesn\'t support this method.');
};


