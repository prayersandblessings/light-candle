import React, {useState} from 'react'
import Layout from '../../components/layout'
import styles from './index.module.scss'
import Checkbox from '../../components/form/Checkbox'
import PAGES from '../../constants/routes';


const ReceiveABlessing = () => {
  const [blessingDayAccepted, setBlessingDayAccepted] = useState(false)
  const [regularMailingAccepted, setRegularMailingAccepted] = useState(false)
  
  const handleBlessingDayAccepted = (value) => {
    setBlessingDayAccepted(value)
  }

  const handleRegularMailingAccepted = (value) => {
    setRegularMailingAccepted(value)
  }

  return (
    <Layout classNameSection={PAGES.RECEIVE_A_BLESSING.className}>
      <div className={styles.container}>
        <span className="caption">Receive</span>
        <h2 className={styles.title + ' title'}>A blessing</h2>
        <p>Subscribe to receive a daily blessing in the form of an inspiring word to contemplate represented by an uplifting visual image. You can contemplate the blessing throughout the day or share it with whoever you wish.</p>
        <form className={styles.subscribeForm}>
          <input type="text" placeholder="Your Name" className="secondary"></input>
          <input type="text" placeholder="Your Surname" className="secondary"></input>
          <input type="email" placeholder="Your Email" className="secondary"></input>
          <div>
              <Checkbox
                id="subscribe-blessing-day"
                label={ 'Subscribe me to A Blessing a Day'}
                checked = { blessingDayAccepted }
                onClick = { handleBlessingDayAccepted }
              />
            <div>
              <Checkbox
                id="regular-mailing"
                label={ 'Subscribe me to the regular mailing list'}
                checked = { regularMailingAccepted }
                onClick = { handleRegularMailingAccepted }
              />
            </div>
          </div>
          <button type="submit" className="next-button">
            <span className='caption'>Subscribe me</span>
            <img src="/icon-arrow-right.svg" width="52px"></img>
          </button>
        </form>
      </div>
    </Layout>
  )
}


export default ReceiveABlessing
