
import React, {useState, useRef} from 'react'
import axios from '../../lib/axios'
import styles from './index.module.scss'
import Checkbox from '../form/Checkbox'
import PAGES from '../../constants/routes'
import Spinner from '../Spinner'
import Link from 'next/link'

const SECTIONS = {
  STEP1: 'FORM',
  STEP2: 'SUBMITED',
}

const SubscribeComponent = ({onSubscribe= ()=>{}, blessingDayProp = false, regularMailingProp = false}) => {
  const inputName = useRef(null);
  const inputEmail = useRef(null);
  const inputSurname = useRef(null);
  const [blessingDayAccepted, setBlessingDayAccepted] = useState(blessingDayProp)
  const [regularMailingAccepted, setRegularMailingAccepted] = useState(regularMailingProp)
  const [showSection, setSection] = useState(SECTIONS.STEP1);
  const [showSpinner, setShowSpinner] = useState(false);


  const handleBlessingDayAccepted = (value) => {
    setBlessingDayAccepted(value)
  }

  const handleRegularMailingAccepted = (value) => {
    setRegularMailingAccepted(value)
  }

  const onHandleSubmit = (event) => {
    event.preventDefault();
    const { current : { value: name = '' }} = inputName;
    const { current : { value: surname = '' }} = inputSurname;
    const { current : { value: email = '' }} = inputEmail;
    
    setShowSpinner(true);
    axios.post('/api/subscribe', {name, surname, email, regularMailingAccepted, blessingDayAccepted}).then( (result) => {
      setSection(SECTIONS.STEP2);
      onSubscribe(true);
      setShowSpinner(false)
    }).catch(error => {
      setSection(SECTIONS.STEP2);
      onSubscribe(false);
      setShowSpinner(false)
    })
  }

  return (
    <div className={styles.subscribeComponent}>
      {showSpinner && <Spinner />}
      {showSection === SECTIONS.STEP1 && (
        <form onSubmit={onHandleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            name="Name"
            className="secondary"
            required
            ref={inputName}
          />
          <input
            type="text"
            placeholder="Your Surname"
            surname="Surname"
            className="secondary"
            required
            ref={inputSurname}
          />
          <input
            type="email"
            placeholder="Your Email"
            email="Email"
            className="secondary"
            required
            ref={inputEmail}
          />
          <div>
            <Checkbox
              id="subscribe-blessing-day"
              label={ 'Subscribe me to A Blessing a Day'}
              checked = { blessingDayAccepted }              
              onClick = { handleBlessingDayAccepted }
              required = { blessingDayProp === true }
            />

            <Checkbox
              id="regular-mailing"
              label={ 'Subscribe me to the regular mailing list'}
              checked = { regularMailingAccepted }
              onClick = { handleRegularMailingAccepted }
              required = { regularMailingProp === true }
            />
          </div>
          <button type="submit" className="next-button" >
            <span className='caption'>Subscribe me</span>
            <img src="/icon-arrow-right.svg" width="52px"></img>
          </button>
        </form>
      )}
      {showSection === SECTIONS.STEP2 && (
        <>
          <p className={styles.thanksText}>Thank you for subscribing!</p>
          <Link as={PAGES.LIGHT_A_CANDLE.url} href={PAGES.LIGHT_A_CANDLE.name}>
            <button className={styles.candleButton + ' candle-button'}>
              <img src="/icon-more.png"></img>
              Light a Candle
            </button>
          </Link>
        </>
      )}
    </div>
  );
}

export default SubscribeComponent;