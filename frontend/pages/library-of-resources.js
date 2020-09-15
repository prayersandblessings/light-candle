import React, {useState, useEffect, useRef} from 'react'
import Layout from '../components/layout'
import useScrollPosition from '../components/CustomHooks/useScrollPosition'
import SubscribeComponent from '../components/Subscribe'
import axios from '../lib/axios'
import styles from './library-of-resources.module.scss'


const LibraryOfResources = () => {
  let [resources, setResources] = useState([]);
  let [categories, setCategories] = useState([]);
  let [categorySelected, setCategory] = useState('');
  let [libraryElements, serLibraryElements] = useState([]);
  const categoriesSectionRef = useRef('');
  const [hasOverlay, setHasOverlay] = useState(false)

  useScrollPosition(({ prevPos, currPos }) => {
    const isBackgroundBlack = Math.abs(currPos.y) >= categoriesSectionRef.current.offsetTop - 200;
    setHasOverlay(isBackgroundBlack)  
  }, [hasOverlay])

  const handleSelectCategory = (category) => () => {
    setCategory(category);
  }

  const handleShare = (title) => () => {
    alert('Share category', title);
  }

  const handleResourcesChanges = (libResources, categories) => {
    setResources(libResources);
    setCategories(categories);
  }

  const scrollTo = () => {
    categoriesSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(()=>{
    axios.get('/api/resources').then( ({ data : {resources, categories} }) => {
      handleResourcesChanges(resources, categories);
    }).catch(error => {
      handleResourcesChanges([], []);
    })
  },[]);

  useEffect(()=>{
    const images = [{ title: 'Image', content: '', author: '' }, { title: 'Image', content: '', author: '' }, { title: 'Image', content: '', author: '' }];

    const filteredResources = resources.filter(({
      resource_category: { title: category }
    }, index) => {
      if (category === categorySelected) {
        return true;
      }
      if (categorySelected === '' && index < 5) {
        return true;
      }
      return false;
    });
    let indexResources = 0;
    let indexImages = 0;
    while (indexResources < filteredResources.length && indexImages < images.length) { 
      if (indexResources % 4 === 0 && indexResources !== 0) {
        filteredResources.splice(indexResources-1, 0, images[indexImages]);
        indexImages += 1;
      }

      indexResources += 1;
    }

    serLibraryElements(filteredResources);
    console.log('Updating filtered Resources')
  },[resources, categorySelected]);

  return (
    <Layout>
      <>
      <div className={`${styles.overlay} ${hasOverlay ?  styles.showOverlay: 'no-overlay' }`} />
      <div className={styles.container}>
        <div className={styles.libraryContainer}>
          <div>
            <span className='caption'>Library</span>
            <h2 className={styles.title + ' title'}>Of resources</h2>
          </div>
          <a onClick={scrollTo}>
            <img src="/icon-arrow-down.svg" width='24px'></img>
          </a>
        </div>
        <div className={styles.categories} id="categoriesComponent" ref={categoriesSectionRef}>
          {categories.map((category) => (
            <button key={category} onClick={handleSelectCategory(category)}>
              {category}
            </button>
          ))}
        </div>
        { libraryElements.map(
          ({ title, content, author }, index) =>
            <>
              {title === 'Image' && (
                <img  key={`${title}-${index}`}  src="/image-library.jpg" className={styles.prayerImage}/>
              )}
              {title !== 'Image' && (
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
            </>
        )}

        <div className={styles.libraryFooter}>
          <div className="divider" />
          <SubscribeComponent/>
        </div>
      </div>
      </>
    </Layout>
  );
}


export default LibraryOfResources
