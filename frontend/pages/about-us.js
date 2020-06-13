import React from 'react'
import Layout from '../components/layout'
import Link from 'next/link'
import PAGES from '../constants/routes'
import styles from './about-us.module.scss'

const AboutUs = () => {
  return (
    <Layout backgroundState = 'color'>
        <span className={styles.caption + ' caption'}>About</span>
        <h2 className={styles.title}>Who we are</h2>
        <div className={styles.aboutUsText}>
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem veritatis.</p>
        </div>
        <img src="/about-us.jpg" className={styles.aboutUsImage}></img>
        <button className={styles.documentaryButton + ' secondary-button'}>About the documentary</button>
        <div className={styles.aboutUsDescription}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem veritatis.</p>
          <p>Et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
          <div className={styles.divider}></div>
          <Link
            as={`${PAGES.LIGHT_A_CANDLE.url}`}
            href={PAGES.LIGHT_A_CANDLE.url}
          >
            <button>
              <span class="caption">Light</span>
              <span className={styles.lightCandleButton}>
                A candle 
                <img src='/icon-arrow-right.svg' width='36px'></img>
              </span>
            </button>
          </Link>
        </div>
    </Layout>
  );
}


export default AboutUs
