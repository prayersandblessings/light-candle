import { sendEmail } from '../../../lib/sendEmail';
import { subscribeUser } from '../subscribe';
const urlNEXT = process.env.NEXT_PUBLIC_URL;

export default async (req, res) => {
    if(req.method === 'POST') {
      const {  senderName, senderEmail, name, email, message, regularMailingAccepted } = req.body;
      try {

        const emailContent = `
            <div style="max-width: 100%; background-color: #F8F9FA; padding: 1rem;">
            <div style="max-width: 620px; background-color: #2a1928; margin: 0 auto; padding: 1rem; text-align: center; background-image: '${urlNEXT}/backgrounds/prayer-email.jpg';">
                <p style="margin-left: 32px; margin-top: 40px; font-size: 1.5rem; color: #d0d5ed; text-align: left; font-weight: bold;">Dear ${name}, </p>
                <p style="margin-left: 32px; margin-bottom: 40px; font-size: 1.25rem;  color: #d0d5ed; text-align: left;">${senderName} has lit a candle for you:</p>
                <img src='${urlNEXT}/candle-email.gif' >
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
        `;
        const result = await sendEmail({ 
            senderName,
            name,
            email,
            emailContent,
            subject: `${senderName} has sent you a prayer 🕯️`
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
