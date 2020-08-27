import React from 'react'
import Layout from '../components/layout'
import styles from './receive-a-blessing.module.scss'


const ReceiveABlessing = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <span className="caption">Receive</span>
        <h2 className={styles.title + ' title'}>A blessing</h2>
        <p>Subscribe to receive a daily blessing in the form of an inspiring word to contemplate represented by an uplifting visual image. You can contemplate the blessing throughout the day or share it with whoever you wish.</p>
        <form className={styles.subscribeForm}>
          <input type="text" placeholder="Your Name" className="secondary"></input>
          <input type="text" placeholder="Your Surname" className="secondary"></input>
          <input type="email" placeholder="Your Email" className="secondary"></input>
          <div>
            <div>
              <input type="checkbox"></input>
              <label>Subscribe me to A Blessing a Day</label>
            </div>
            <div>
              <input type="checkbox"></input>
              <label>Subscribe me to the regular mailing list</label>
            </div>
          </div>
          <button type="submit" className="next-button">
            <img src="/icon-arrow-right.svg" width="44px"></img>
            Subscribe
          </button>
        </form>
      </div>
    </Layout>
  )
}


export default ReceiveABlessing
