import { sendEmail } from '../../../lib/sendEmail';
import { subscribeUser } from '../subscribe';
const urlNEXT = process.env.NEXT_PUBLIC_URL;
const PRAYERS_CONTACT_EMAIL = process.env.PRAYERS_CONTACT_EMAIL;

export default async (req, res) => {
    if(req.method === 'POST') {
      const {  email, message, name } = req.body;
      try {

        const emailContent = `
            <div style="max-width: 100%; background-color: #F8F9FA; padding: 1rem;">
            <div style="max-width: 620px; background-color: #28292a;; margin: 0 auto; padding: 1rem; text-align: center;">
                <p style="margin-left: 32px; margin-top: 40px; font-size: 1.25rem; color: #d0d5ed; text-align: left;">A new contact from ${name}, email: ${email} </p>
                <p style="font-size: 1.25rem;  color: #d0d5ed; margin-left: 32px; margin-right: 32px; margin-top: 3rem; line-height: 2rem;">
                Message: "${message}"
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
            name,
            email: PRAYERS_CONTACT_EMAIL,
            emailContent,
            subject: `New contact from ${name}`
        });

        return res.status(200).json({result})
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
