import React, {useState, useEffect} from 'react'
import Layout from '../components/layout'
import SubscribeComponent from '../components/subscribe'
import axios from '../lib/axios'
import styles from './library-of-resources.module.scss'

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
      <div className={styles.container}>
        <div className={styles.libraryContainer}>
          <span className={styles.caption + ' caption'}>Library</span>
          <h2 className={styles.title + ' title'}>Of resources</h2>
          <a>
            <img src="/icon-arrow-down.svg" width='24px'></img>
          </a>
        </div>
        <div className={styles.categories}>
          {categories.map((category) => (
            <button key={category} onClick={handleSelectCategory(category)}>
              {category}
            </button>
          ))}
        </div>
        { resources.filter(({
          resource_category: { title: category }
        }) => (category === categorySelected || categorySelected === '')).map(
          ({ title, content, author }) => 
          <div key={`${title}-${author}`} className={styles.prayer}>
            <h2>
              {title}
            </h2>
            <p>
              {content}
            </p>
            <span className={styles.author}>
              - {author}
            </span>
            <button onClick={handleShare(title)}>
              <img src="/icon-share.svg" width="16px"></img>
            </button>
          </div>
        )}

        <div class="divider"></div>

        <SubscribeComponent/>
      </div>
    </Layout>
  );
}


export default LibraryOfResources
