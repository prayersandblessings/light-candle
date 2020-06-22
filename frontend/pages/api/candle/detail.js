
const CANDLE_CONTENT = {
    message: `
      Lorem Ipsum is simply dummy text of the printing 
      and typesetting industry. Lorem Ipsum has been the industry's 
      standard dummy text ever since the 1500s, when an unknown printer 
      took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into 
      electronic typesetting, remaining essentially unchanged. 
      It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with
      desktop publishing software like Aldus PageMaker including versions
      of Lorem Ipsum.
    `,
    author: 'David Shaffer',
    urlVideo: '/small.mp4'
  }

import { fetchAPI } from '../../../lib/api';

export default async (req, res) => {
  const {
    query: { candleId },
  } = req

  const {prayersAndBlessings: [content]} = await fetchAPI(
    `query PrayersAndBlessings($id: ID!) {
            prayersAndBlessings(where:{ id: $id, enabled: true }) {
              id
              Sender
              receiver_email
              enabled
              message
              sound {
                name
                sound {
                  url
                }
              }
              language {
                name
              }
            }
        }
    `,
    { variables: { id: candleId } }
  )

  res.status(200).json({ content })
}

    