import { sendEmail } from '../../../lib/sendEmail';
import { subscribeUser } from '../subscribe';
const urlNEXT = process.env.NEXT_PUBLIC_URL;

export default async (req, res) => {
    if(req.method === 'POST') {
      const {  senderName, senderEmail, name, email, message, regularMailingAccepted } = req.body;
      try {

        const emailContent = `
            <div style="max-width: 100%; background-color: #e5eaef; padding: 1rem;">
            <div style="max-width: 620px; margin: 0 auto; padding: 1rem; text-align: center; background-color: #FFFFFF !important;">
                <p style="margin-left: 32px; margin-top: 40px; font-size: 1.5rem; color: #181f40; text-align: left;">Dear ${name}, </p>
                <p style="margin-left: 32px; margin-bottom: 40px; font-size: 1.25rem;  color: #181f40; text-align: left;">${senderName} has sent you a blessing:</p>
                <img style="width: 100%;" src='${urlNEXT}/candle-email.gif' >
                <p style="font-size: 1.25rem;  color: #181f40; margin-left: 32px; margin-right: 32px; margin-top: 3rem; line-height: 2rem;">
                "${message}"
                </p>
                <p style="font-size: 1.25rem; text-align: right; margin-left: 32px; margin-right: 32px; color: #181f40; margin-bottom: 2rem; font-style: italic;">
                - ${senderName}
                </p>
                <div style="text-align: center;">
                <a style="border: 1px solid #181f40 !important;
                    text-decoration:none;
                    color: #181f40;
                    text-align: center;
                    border-radius: 24px;
                    padding: 10px 32px;
                    display: inline-block;
                    margin: 0 auto 2rem auto;
                    font-size: 1.25rem;
                    "
                    href="${urlNEXT}"
                >
                    Visit Prayers & Blessings
                </a>
                </div>
                <p style="text-align: center; margin-bottom: 60px; color: #181f40; font-size: .75rem;">
                Copyright © 2020 Prayers & Blessings, All rights reserved.
                </p>
            </div>
            </div>
        `;
        const result = await sendEmail({ 
            senderName,
            name,
            email,
            emailContent,
            subject: `${senderName} has sent you a blessing 🕯️`
        });
        const data = {
            email_address: senderEmail,
            merge_fields: {
              FNAME: senderName,
              LNAME: senderName,
            },
            status_if_new: "subscribed",
          };

        const response = await subscribeUser({res, data, blessingDayAccepted: false, regularMailingAccepted, email: senderEmail});
        return response;
      } catch (e){
        return res.status(404).json({
            error: {
                error: e,
                messgae: 'unexpected error'
            }
        });
      } 
    }

    return res.status(404).json({
        error: {
            code: 'not_found',
            messgae: "The requested endpoint was not found or doesn't support this method."
        }
    });
}
