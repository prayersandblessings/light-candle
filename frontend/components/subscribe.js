
import React, {useState} from 'react'
import styles from './subscribe.module.scss'
import Checkbox from '../components/form/Checkbox'

const SubscribeComponent = () => {

  const onSubmit = () => {
    alert('Submiting');
  }

  const [blessingDayAccepted, setBlessingDayAccepted] = useState(false)
  const [regularMailingAccepted, setRegularMailingAccepted] = useState(false)
  
  const handleBlessingDayAccepted = (value) => {
    setBlessingDayAccepted(value)
  }

  const handleRegularMailingAccepted = (value) => {
    setRegularMailingAccepted(value)
  }

  return (
    <div className={styles.subscribeComponent}>
      <form>
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
          <Checkbox
            id="regular-mailing"
            label={ 'Subscribe me to the regular mailing list'}
            checked = { regularMailingAccepted }
            onClick = { handleRegularMailingAccepted }
          />
        </div>
        <button type="submit" className="next-button" onClick={onSubmit}>
          <span className='caption'>Subscribe me</span>
          <img src="/icon-arrow-right.svg" width="52px"></img>
        </button>
      </form>
    </div>
  );
}

export default SubscribeComponent;