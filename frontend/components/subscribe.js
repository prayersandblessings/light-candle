
import React, {useState, useRef} from 'react'
import styles from './subscribe.module.scss'
import Checkbox from '../components/form/Checkbox'

const SECTIONS = {
  STEP1: 'FORM',
  STEP2: 'SUBMITED',
}

const SubscribeComponent = ({onSubscribe}) => {

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

  const inputName = useRef(null);
  const inputEmail = useRef(null);
  const inputSurname = useRef(null);

  const [showSection, setSection] = useState(SECTIONS.STEP1);

  const handleSumbitForm = () => {
    setSection(SECTIONS.STEP2);
    onSubscribe();
  }

  const onHandleSubmit = (event) => {
    event.preventDefault();
    const { current : { value: name = '' }} = inputName;
    const { current : { value: surname = '' }} = inputSurname;
    const { current : { value: email = '' }} = inputEmail;
    console.log( name, surname, email);
    handleSumbitForm();
  }

  return (
    <div className={styles.subscribeComponent}>
      {showSection === SECTIONS.STEP1 && (
        <form onSubmit={onHandleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            name="Name"
            className="secondary"
            ref={inputName}
          />
          <input
            type="text"
            placeholder="Your Surname"
            surname="Surname"
            className="secondary"
            ref={inputSurname}
          />
          <input
            type="email"
            placeholder="Your Email"
            email="Email"
            className="secondary"
            ref={inputEmail}
          />
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
      )}
      {showSection === SECTIONS.STEP2 && (
        <p className={styles.thanksText}>Thank you for subscribing!</p>
      )}
    </div>
  );
}

export default SubscribeComponent;