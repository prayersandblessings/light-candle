
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

async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.data
}

// export async function getArticles() {
//   const data = await fetchAPI(`query Articles {
//     articles {
//       id
//       title
//       category {
//         id
//         name
//       }
//       image {
//         url
//         alternativeText
//       }
//     }
//   }`)
//   return data.articles
// }

// export async function getArticle(id) {
//   const data = await fetchAPI(
//     `query Articles($id: ID!) {
//     article(id: $id) {
//       id
//       title
//       content
//       image {
//         url
//         alternativeText
//       }
//       category {
//         id
//         name
//       }
//       published_at
//     }
//   }`,
//     { variables: { id } }
//   )
//   return data.article
// }

// export async function getCategories() {
//   const data = await fetchAPI(`query Categories {
//     categories {
//       id
//       name
//     }
//   }`)
//   return data.categories
// }

// export async function getCategory(id) {
//   const data = await fetchAPI(
//     `query Category($id: ID!) {
//     category(id: $id) {
//       id
//       name
//       articles {
//         id
//         title
//         content
//         image {
//           url
//           alternativeText
//         }
//         category {
//           id
//           name
//         }
//       }
//     }
//   }
// `,
//     { variables: { id } }
//   )
//   return data.category
// }


export async function getCandleInfo(id) {
//   const data = await fetchAPI(
//     `query Category($id: ID!) {
//     category(id: $id) {
//       id
//       name
//       articles {
//         id
//         title
//         content
//         image {
//           url
//           alternativeText
//         }
//         category {
//           id
//           name
//         }
//       }
//     }
//   }
// `,
//     { variables: { id } }
//   )
//   return data.category
  const candle = await (async ()=> {
    let candle;
    candle = CANDLE_CONTENT;
    return candle;
  })();
  console.log(candle,'<<<<<<<<<<<');
  return candle;
}
