import { sendEmail } from '../../../lib/sendEmail';
import { subscribeUser } from '../subscribe';
const urlNEXT = process.env.NEXT_PUBLIC_URL;

export default async (req, res) => {
    if(req.method === 'POST') {
      const {  senderName, senderEmail, name, email, message, regularMailingAccepted } = req.body;
      try {

        const emailContent = `
        <div style="background: #e5eaef; padding:48px;">
            <table width="100%" bgcolor="#e5eaef" border="0" style="border-spacing:0; margin: 0 auto; max-width: 620px;">
                <tbody bgcolor="#ffffff" style="max-width: 620px;">
                    <tr border="0" bordercolor="#ffffff">
                        <td style="font-size: 1.5rem; padding-left: 40px; padding-top: 40px; padding-bottom: 32px; color:#181f40;">Dear ${name},</td>
                    </tr>
                    <tr border="0" bordercolor="#ffffff">
                        <td style="font-size: 1.25rem; padding-left: 40px; padding-bottom: 40px; color:#181f40;">${senderName} has sent you a blessing</td>
                    </tr>
                    <tr>
                        <td style="padding-left: 20px; padding-right: 20px;">
                            <img width="100%" src="${urlNEXT}/candle-email.gif" alt="Light a candle image" />
                        </td>
                    </tr>
                    <tr>
                        <td style="font-size: 1.25rem; color:#181f40; text-align: center; padding: 52px 40px;">
                            "${message}"
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right; padding: 0 40px 40px 40px; font-size: 1.25rem; font-style:italic; color:#181f40;">- ${senderName}</td>
                    </tr>
                    <tr>
                        <td style="text-align: center;">
                            <a href="${urlNEXT}"
                                style="
                                    color: #181f40;
                                    border: 1px solid #181f40;
                                    background: #ffffff;
                                    border-radius: 40px;
                                    font-size: 1.25rem;
                                    padding: 16px 20px;
                                    display: inline-block;
                                    text-decoration: none;
                                "
                            > Visit prayers and blessings
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td style="font-size: .75rem; color:#181f40; text-align: center; padding: 52px 0 80px 0;">
                            Copyright © 2020 Prayers & Blessings, All rights reserved.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        `;
        await sendEmail({ 
            senderName,
            name,
            email,
            emailContent,
            subject: `${senderName} has sent you a blessing 🕯️`
        });

        const emailContentConfirmation = `
            <div style="background: #e5eaef; padding:48px;">
                <table width="100%" bgcolor="#ffffff" border="0" style="border-spacing:0; margin: 0 auto; max-width: 620px;">
                    <tbody bgcolor="#ffffff" style="max-width: 620px;">
                        <tr border="0" bordercolor="#ffffff">
                            <td style="font-size: 1.25rem; padding-left: 40px; padding-top: 40px; padding-bottom: 40px; color:#181f40;">${senderName}, <br> Your blessing has been sent to: ${name} to the email ${email}</td>
                        </tr>
                        <tr>
                            <td style="padding-left: 20px; padding-right: 20px;">
                                <img width="100%" src="${urlNEXT}/candle-email.gif" alt="Light a candle image" />
                            </td>
                        </tr>
                        <tr>
                            <td style="text-align: center;">
                                <a href="${urlNEXT}"
                                    style="
                                        color: #181f40;
                                        border: 1px solid #181f40;
                                        background: #ffffff;
                                        border-radius: 40px;
                                        font-size: 1.25rem;
                                        padding: 16px 20px;
                                        display: inline-block;
                                        text-decoration: none;
                                        margin-top: 40px;
                                    "
                                > Visit prayers and blessings
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td style="font-size: .75rem; color:#181f40; text-align: center; padding: 52px 0 80px 0;">
                                Copyright © 2020 Prayers & Blessings, All rights reserved.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
        // Sending confirmation email
        await sendEmail({ 
            email: senderEmail,
            emailContent:  emailContentConfirmation,
            subject: `Your blessing has been sent 🕯️`
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
