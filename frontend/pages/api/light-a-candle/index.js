
// import { fetchAPI } from '../../../lib/api';

export default async (req, res)  => {

  // const { prayersAndBlessingsConnection: {aggregate: {count: totalPrayers = 0 }}} = await fetchAPI(
  //   `query getTotalPrayers {
  //     prayersAndBlessingsConnection(where: { enabled: true })  {
  //       aggregate {
  //         count
  //       }
  //     }
  //   }
  //   `,
  //   { variables: { } }
  // );

  // const { languages = [] } = await fetchAPI(
  //   `query getResources {
  //     languages(where: { enabled: true }) {
  //       id,
  //       name ,
  //       enabled
  //     }  
  //   }
  //   `,
  //   { variables: { } }
  // )

  // const { sounds = [] } = await fetchAPI(
  //   `query getSounds {
  //     sounds(where: { enabled: true }) {
  //   		id,
  //       name ,
  //       enabled
  //       sound {
  //         url
  //       }
  //     }
  //   }
  //   `,
  //   { variables: { } }
  // )
  const sounds = [
    {
      	id: 'flute',
        name: 'Flute' ,
        enabled: true,
        sound: {
          url: '/sound-flute.mp3'
        }
      },
      {
      	id: 'piano',
        name: 'Piano' ,
        enabled: true,
        sound: {
          url: '/sound-piano.mp3'
        }
      }
  ];


  res.status(200).json({ languages: [], totalPrayers: [], sounds })
}