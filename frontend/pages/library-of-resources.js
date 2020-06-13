import React, {useState, useEffect} from 'react'
import Layout from '../components/layout'
import SubscribeComponent from '../components/subscribe'
import axios from '../lib/axios'

const LibraryOfResources = () => {
  let [resources, setResources] = useState([]);
  let [categories, setCategories] = useState([]);
  let [categorySelected, setCategory] = useState('');

  const handleSelectCategory = (category) => () => {
    setCategory(category);
  }

  const handleShare = (title) => () => {
    alert('Share category', title);
  }

  const handleResourcesChanges = (resources, categories) => {
    setResources(resources);
    setCategories(categories);
  }

  useEffect(()=>{
    axios.get('/api/resources').then( ({ data : {resources, categories} }) => {
      handleResourcesChanges(resources, categories);
    }).catch(error => {
      console.log(error);
      handleResourcesChanges([], []);
    })
  },[])
  

  return (
    <Layout>
      <h2>
        LIBRARY
      </h2>
      <h1>
        Of resources
      </h1>
      <p>
        {categories.map((category) => (
          <button key={category} onClick={handleSelectCategory(category)}>
            {category}
          </button>
        ))}
      </p>
      { resources.filter(({
        resource_category: { title: category }
      }) => (category === categorySelected || categorySelected === '')).map(
        ({ title, content, author }) => 
        <div key={`${title}-${author}`}>
          <h2>
            {title}
          </h2>
          <p>
            {content}
          </p>
          <p>
            {author}
          </p>
          <button onClick={handleShare(title)}>Share</button>
        </div>
      )}

      <SubscribeComponent/>
    </Layout>
  );
}


export default LibraryOfResources
