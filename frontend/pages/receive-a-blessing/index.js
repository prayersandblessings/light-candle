import React, { useState } from 'react'
import Layout from '../../components/layout'
import styles from './index.module.scss'
import PAGES from '../../constants/routes';
import SubscribeComponent from '../../components/Subscribe'



const ReceiveABlessing = () => {

  const [showTitle, setShowTitle] = useState(true);

  const handleSubscribe = () => {
    setShowTitle(false);
  }

  return (
    <Layout classNameSection={PAGES.RECEIVE_A_BLESSING.className}>
      <div className={styles.container}>
        <span className="caption">Receive</span>
        <h2 className={styles.title + ' title'}>A blessing</h2>
        { showTitle && (
          <>
            <p>Subscribe to receive a daily blessing in the form of an inspiring word to contemplate represented by an uplifting visual image. You can contemplate the blessing throughout the day and share it with whoever you wish.</p>
          </>
        )}
        <SubscribeComponent blessingDayProp={true} onSubscribe={handleSubscribe}/>
        { !showTitle && (
          <>
            <p>Your first blessing will arrive to your inbox shortly.</p>
          </>
        )}
      </div>
    </Layout>
  )
}


export default ReceiveABlessing
