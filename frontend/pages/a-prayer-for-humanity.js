import React from 'react'
import Layout from '../components/layout'
import LightACandleLink from '../components/LightACandleLink'
import styles from './who-we-are.module.scss'

const WhoWeAre = () => {
  return (
    <Layout backgroundState = 'color'>
        <div className={styles.container}>
          <span className={styles.caption + ' caption'}>A PRAYER</span>
          <h2 className={styles.title + ' title'}>For humanity</h2>
          <h3>LET US BE UNITED</h3>
          <p> Lorem ipsum dolor sit amet</p>
          <p> Lorem ipsum dolor sit amet</p>
          <p> Lorem ipsum dolor sit amet</p>
          <p> Lorem ipsum dolor sit amet</p>
          <p> Lorem ipsum dolor sit amet</p>
          <p> Lorem ipsum dolor sit amet</p>

          <LightACandleLink />
        </div>
    </Layout>
  );
};

export default WhoWeAre;
