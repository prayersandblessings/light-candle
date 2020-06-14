
import { fetchAPI } from '../../../lib/api';

export default async (req, res)  => {
  const { 
    body: {
      language = '',
      sound = '',
      name = '',
      email = '',
      message = ''
    }
  } = req;
  console.log(req.body);
  if(!language || !name || !email || !message ) {
    res.status(400).json({ message: 'Missing fields'})
    return;
  }
  
  

  const {  createPrayersAndBlessing: { prayersAndBlessing: prayer  = null } } = await fetchAPI(
    `mutation($name: String, $email: String, $message: String, $sound:ID, $language:ID) {
      createPrayersAndBlessing(input: {
        data: {
          Sender: $name
          receiver_email: $email
          enabled: true
          message: $message
          sound: $sound
          language: $language
        }
      }){
        prayersAndBlessing {
          id
          Sender
          receiver_email
          enabled
          sound {
            name
          }
          language {
            name
          }
        }
      }
    }`,
    { variables: { language , sound , name, email, message } }
  )


  if(!prayer) {
    res.status(400).json({ message: 'Error Saving'})
    return;
  }

  res.status(200).json({ prayer: prayer })
}