
import { fetchAPI } from '../../../lib/api';

// Old implementation saving in database
// export default async (req, res) => {
//   const {
//     body: {
//       language = "",
//       sound = "",
//       name = "",
//       nameReceipent = "",
//       email = "",
//       message = "",
//     },
//   } = req;

//   if (!language || !name || !nameReceipent || !email || !message) {
//     res.status(400).json({ message: "Missing fields" });
//     return;
//   }

//   const {
//     createPrayersAndBlessing: { prayersAndBlessing: prayer = null },
//   } = await fetchAPI(
//     `mutation($name: String, $nameReceipent: String, $email: String, $message: String, $sound:ID, $language:ID) {
//       createPrayersAndBlessing(input: {
//         data: {
//           Sender: $name
//           receiver_email: $email
//           enabled: true
//           name_receipent: $nameReceipent
//           message: $message
//           sound: $sound
//           language: $language
//         }
//       }){
//         prayersAndBlessing {
//           id
//           Sender
//           receiver_email
//           enabled
//           sound {
//             name
//           }
//           language {
//             name
//           }
//         }
//       }
//     }`,
//     { variables: { language, sound, name, nameReceipent, email, message } }
//   );

//   if (!prayer) {
//     res.status(400).json({ message: "Error Saving" });
//     return;
//   }

//   res.status(200).json({ prayer: prayer });
// };


const nodemailer = require("nodemailer");

const PRAYERS_EMAIL = process.env.PRAYERS_EMAIL;
const PRAYERS_PASS = process.env.PRAYERS_PASS;
const urlNEXT = process.env.NEXT_PUBLIC_URL;

// async..await is not allowed in global scope, must use a wrapper
async function main({senderName, receipentName, receipentEmail, message }) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: PRAYERS_EMAIL,//testAccount.user, // generated ethereal user
      pass: PRAYERS_PASS, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: PRAYERS_EMAIL, // sender address
    to: `${receipentEmail}, ${PRAYERS_EMAIL}`, // list of receivers
    subject: `${senderName} has sent you a prayer`, // Subject line
    html: `
      <div style="max-width: 620px">
        <p style="margin-left: 32px; margin-top: 40px">Dear ${receipentName}, </p>
        <p style="margin-left: 32px; margin-bottom: 40px">${senderName} has lit a candle for you:</p>
        <img src='${urlNEXT}/candle-email.gif' >
        <br />
        ${message}
        <div style="text-align: center;">
          <a style="background:#c2a25f;
            text-decoration:none;
            color:white;
            text-align: center;
            border-radius: 20px;
            padding: 10px 24px;
            display: inline-block;
            margin: 0 auto;
            "
            href="${urlNEXT}"
          >
            ${urlNEXT}
          </a>
        </div>
        <p style="text-align: center; margin-bottom: 60px">
          Copyright © 2020 Prayers & Blessings, All rights reserved.
        </p>
      </div>
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}



export default async (req, res)  => {
  const { 
    body: {
      senderName = '',
      senderEmail = '',
      receipentName = '',
      receipentEmail = '',
      message = ''
    }
  } = req;

  if(!senderName || !senderEmail || !receipentName || !receipentEmail || !message ) {
    res.status(400).json({ message: 'Missing fields'})
    return;
  }
  main({senderName, senderEmail, receipentName, receipentEmail, message }).catch(console.error);
  res.status(200).json({ status: 'Prayer Sent' });
}