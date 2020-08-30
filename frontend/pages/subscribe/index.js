import React from 'react'

import Layout from '../../components/layout'
import SubscribeComponent from '../../components/subscribe'
import { SECONDARY_PAGES } from '../../constants/routes'

import styles from './index.module.scss'

const Subscribe = () => {
  return (
    <Layout classNameSection={SECONDARY_PAGES.SUBSCRIBE.className}>
        <div className={styles.container}>
          <span className="caption">Latest News</span>
          <h2 className="title">Subscribe</h2>
          <p>
            You can register and stay up to date with the latest news from Prayers & Blessings.
          </p>
          <SubscribeComponent/>
        </div>
    </Layout>
  );
}


export default Subscribe
