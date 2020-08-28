import React from 'react'

import Layout from '../../components/layout'
import SubscribeComponent from '../../components/subscribe'
import { SECONDARY_PAGES } from '../../constants/routes'

import styles from './index.module.scss'

const Subscribe = () => {
  return (
    <Layout classNameSection={SECONDARY_PAGES.CONTACT.className}>
        <div className={styles.container}>
          <SubscribeComponent/>
        </div>
    </Layout>
  );
}


export default Subscribe
