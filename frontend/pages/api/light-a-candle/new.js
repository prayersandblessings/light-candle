
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
    subject: `${senderName} has sent you a blessing 🕯️`, // Subject line
    html: `
      <div style="max-width: 100%; background-color: #F8F9FA; padding: 1rem;">
        <div style="max-width: 620px; background-color: #28292a;; margin: 0 auto; padding: 1rem; text-align: center;">
          <p style="margin-left: 32px; margin-top: 40px; font-size: 1.25rem; color: #d0d5ed; text-align: left;">Dear ${receipentName}, </p>
          <p style="margin-left: 32px; margin-bottom: 40px; font-size: 1.25rem;  color: #d0d5ed; text-align: left;">${senderName} has lit a candle for you:</p>
          <img src='${urlNEXT}/candle-email.gif' alt="Light a candle image">
          <p style="font-size: 1.25rem;  color: #d0d5ed; margin-left: 32px; margin-right: 32px; margin-top: 3rem; line-height: 2rem;">
            "${message}"
          </p>
          <p style="font-size: 1.25rem; text-align: right; margin-left: 32px; margin-right: 32px; color: #d0d5ed; margin-bottom: 2rem; font-style: italic;">
            - ${senderName}
          </p>
          <div style="text-align: center;">
            <a style="background: #d0d5ed;
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
          <p style="text-align: center; margin-bottom: 60px; color: #d0d5ed;">
            Copyright © 2020 Prayers & Blessings, All rights reserved.
          </p>
        </div>
      </div>
    `, // html body
  });

  // console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
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