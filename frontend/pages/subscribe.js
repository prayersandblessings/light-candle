import React from 'react'
import Layout from '../components/layout'
import SubscribeComponent from '../components/subscribe'
import styles from './subscribe.module.scss'


const LibraryOfResources = () => {
  return (
    <Layout>
        <div className={styles.container}>
          <SubscribeComponent/>
        </div>
    </Layout>
  );
}


export default LibraryOfResources
