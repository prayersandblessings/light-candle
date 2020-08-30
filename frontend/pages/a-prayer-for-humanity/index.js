import React from 'react'

import Layout from '../../components/layout'
import LightACandleLink from '../../components/LightACandleLink'
import PAGES from '../../constants/routes'

import styles from './index.module.scss'

const WhoWeAre = () => {
  return (
    <Layout classNameSection={PAGES.A_PRAYER_FOR_HUMANITY.className}>
        <div className={styles.container}>
          <span className={styles.caption + ' caption'}>A PRAYER</span>
          <h2 className={styles.title + ' title'}>For humanity</h2>
          <div className={styles.prayer}>
            <div>
              <span className={'caption'}>Let us be united</span>
              <p>Let us be united;</p>
              <p>Let us speak in harmony;</p>
              <p>Let our minds apprehend alike.</p>
              <p>Common be our resolution;</p>
              <p>Common be our deliberations.</p>
              <p>Alike be our feelings;</p>
              <p>Unified be our hearts;</p>
              <p>Common be our intentions;</p>
              <p>Perfect be our unity.</p>
              <p>- Rig Veda, dated between 1500-1200 BCE</p>
            </div>
            <div>
              <div className={'scroll-button'}>
                <div></div>
                <span className={'caption'}>Scroll</span>
              </div>
            </div>
          </div>
          <div className={styles.lightCandleButton}>
            <LightACandleLink />
          </div>
        </div>
    </Layout>
  );
};

export default WhoWeAre;
