import React from 'react'
import Layout from '../components/layout'
import LightCandleLink from '../components/LightACandleLink'
import styles from './who-we-are.module.scss'

const WhoWeAre = () => {
  return (
    <Layout backgroundState = 'color'>
        <div className={styles.container}>
          <span className={styles.caption + ' caption'}>Who</span>
          <h2 className={styles.title + ' title'}>We are</h2>

          <div className={styles.whoWeAreText}>
            <h3>ANGELA - PRODUCER</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem veritatis.</p>
          </div>


          <div className={styles.whoWeAreText}>
            <h3>PHIL - DIRECTOR</h3>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem veritatis.</p>
          </div>

          <h2 className={styles.title + ' title'}>Acnowledgements</h2>
          <div className={styles.whoWeAreText}>
            <h3>JACQUELINE - CONTENT EDITOR</h3>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem veritatis.</p>
          </div>

          <div className={styles.whoWeAreText}>
            <h3>EFFECT OR FILMS - WEBSITE DESIGN AND ANIMATION</h3>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem veritatis.</p>
          </div>

          <div className={styles.whoWeAreText}>
          <h3>NASH NAUBERT AND GAYSIL - BANSURI FLUTE COMPOSITION</h3>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem veritatis.</p>
          </div>
          <LightCandleLink />
        </div>
    </Layout>
  );
}


export default WhoWeAre
