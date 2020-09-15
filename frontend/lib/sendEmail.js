import fetch from 'node-fetch'

const { SENDGRID_API, SENDGRID_API_KEY, PRAYERS_EMAIL } = process.env;

const sendEmail = async (body) => {
    const { subject, email, emailContent } = body;
    const result = await fetch(SENDGRID_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${SENDGRID_API_KEY}`
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [
                {
                  email
                }
              ],
              subject: subject
            }
          ],
          from: {
            email: PRAYERS_EMAIL,
            name: 'Prayers and blessings'
          },
          content: [
            {
              type: 'text/html',
              value: emailContent
            }
          ]
        })
    });
    return result;
}

export { sendEmail };