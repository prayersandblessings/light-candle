import React, {useState, useRef} from 'react'
import Checkbox from '../../components/form/Checkbox'
import styles from './index.module.scss'
import Link from 'next/link'
import { SECONDARY_PAGES } from '../../constants/routes'

import {
  CONTACT_FORM_TEXT
} from '../../constants/text';

const ContactForm = ({ onSubmitForm }) => {
    const inputName = useRef(null);
    const inputEmail = useRef(null);
    const inputMessage = useRef(null);
    
    const [privacyAccepted, setPrivacyAccepted] = useState(false)
    const handleAcceptPrivacyPolicy = (value) => {
        setPrivacyAccepted(value)
    }

    const onHandleSubmit = (event) => {
        event.preventDefault();
        const { current : { value: name = '' }} = inputName;
        const { current : { value: email = '' }} = inputEmail;
        const { current : { value: message = '' }} = inputMessage;
        onSubmitForm({name, email, message});
    }
    return (
      <form onSubmit={onHandleSubmit} className={styles.contactForm}>
        <p>We will love to hear from you and will reply as soon as we can.</p>
        <form>
          <input
            type="text"
            required
            placeholder={CONTACT_FORM_TEXT.NAME}
            ref={inputName}
            name="Name"
            className="secondary"
          />
          <input
            type="email"
            required
            placeholder={CONTACT_FORM_TEXT.EMAIL}
            ref={inputEmail}
            name="Email"
            className="secondary"
          />
          <textarea
            ref={inputMessage}
            name="message"
            type="text"
            placeholder={CONTACT_FORM_TEXT.HOW_CAN_HELP}
            rows="2"
            required
          />
          <p>
            <Checkbox
              id="privacy-checkbox"
              checked={privacyAccepted}
              onClick={handleAcceptPrivacyPolicy}
              required
              label={
                <>
                  {CONTACT_FORM_TEXT.READ_AND_UNDERSTOOD}
                  <Link
                    as={`${SECONDARY_PAGES.PRIVACY_POLICY.name}`}
                    href={SECONDARY_PAGES.PRIVACY_POLICY.url}
                  >
                    <a> {SECONDARY_PAGES.PRIVACY_POLICY.name}</a>
                  </Link>
                </>
              }
            />
          </p>
          <button type="submit" className="next-button">
            <span className='caption'>Submit</span>
            <img src="/icon-arrow-right.svg" width="52px"></img>
          </button>
        </form>
      </form>
    );
}

export default ContactForm;