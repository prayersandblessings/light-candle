import React from 'react'
import Layout from '../../components/layout'
import styles from './index.module.scss'
import PAGES from '../../constants/routes';
import SubscribeComponent from '../../components/subscribe'



const ReceiveABlessing = () => {

  return (
    <Layout classNameSection={PAGES.RECEIVE_A_BLESSING.className}>
      <div className={styles.container}>
        <span className="caption">Receive</span>
        <h2 className={styles.title + ' title'}>A blessing</h2>
        <p>Subscribe to receive a daily blessing in the form of an inspiring word to contemplate represented by an uplifting visual image. You can contemplate the blessing throughout the day or share it with whoever you wish.</p>
        <SubscribeComponent/>
      </div>
    </Layout>
  )
}


export default ReceiveABlessing
