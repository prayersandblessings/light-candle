import React, {useRef} from 'react'

import {
    FORM_TEXT,
} from '../../../constants/text';

import styles from './WritePrayer.module.scss';

/**
 * Component to writte Prayer
 * @param {callback} onPrayerWritten
 * @param {callback} onCloseForm
 */
const WritePrayer = ({ onPrayerWritten, onCloseForm })  => {
    const inputName = useRef(null);
    const inputreceipentName = useRef(null);
    const inputEmail = useRef(null);
    const inputMessage = useRef(null);
  
    const onHandleSubmit = (event) => {
      event.preventDefault();
      const { current : { value: name = '' }} = inputName;
      const { current : { value: receipentName = '' }} = inputreceipentName;
      const { current : { value: email = '' }} = inputEmail;
      const { current : { value: message = '' }} = inputMessage;
      onPrayerWritten(name, receipentName,email, message);
    }
  
    return (
      <>
        <div className={styles.container + ' ' + styles.prayerContainter}>
          <form  onSubmit={onHandleSubmit} className={styles.prayerForm}> 
            <button onClick={onCloseForm}>
              <img src='/icon-close.svg' width='16px'></img>
              <span>Close</span>
            </button>
            <span className="caption">{FORM_TEXT.TITLE_1}</span>
            <h3 className="title">{FORM_TEXT.TITLE_2}</h3>
  
            <input
              ref={inputName}
              type="text"
              name="Sender"
              placeholder={FORM_TEXT.WRITE_NAME}
              required
              />
            
            <input
              ref={inputreceipentName}
              type="text"
              name="Recipient"
              placeholder={FORM_TEXT.WRITE_RECEIPENT_NAME}
              required
            />
  
            <input
              ref={inputEmail}
              name="receiver_email"
              type="email"
              placeholder={FORM_TEXT.WRITE_EMAIL}
              required
              />
  
            <textarea
              ref={inputMessage}
              name="message"
              type="text"
              placeholder={FORM_TEXT.WRITE_PRAYER}
              rows="2"
              required
              />
  
            <button type="submit">
              <img src='/icon-arrow-right.svg' width='44px'></img>
            </button>
          </form>
        </div>
      </>
    )  
  } 

  export default WritePrayer;
