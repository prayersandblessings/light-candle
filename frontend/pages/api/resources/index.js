
import { fetchAPI } from '../../../lib/api';

export default async (req, res)  => {

  const { resources = [] } = await fetchAPI(
    `query getResources {
      resources(where: { enabled: true }) {
        title,
        author,
        content,
        resource_category {
            title
          }
      }  
    }
        `,
    { variables: { } }
  )

  const categories = resources.reduce((categories, { resource_category: { title: category} }) => {
    if (categories.indexOf(category) == -1) {
      categories.push(category);
    }
    return categories;
  }, []);
  res.status(200).json({ resources, categories })
}