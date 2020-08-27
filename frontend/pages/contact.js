import React, { useState, useRef } from 'react'
import Layout from '../components/layout'
import Checkbox from '../components/form/Checkbox'
import styles from './contact.module.scss'
import Link from 'next/link'
import { SECONDARY_PAGES } from '../constants/routes'

import {
  CONTACT_FORM_TEXT
} from '../constants/text';

const Contact = () => {
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
    console.log(email, name, message);
    alert('Sent');
  }

  return (
    <Layout>
      <div className={styles.container}>
        <form onSubmit={onHandleSubmit} className={styles.contactForm}>
          <span className="caption">GENERAL INQUIRIES</span>
          <h1 className="title">Contact us</h1>
          <p>
            Join the Prayers & Blessings community and receive our latest
            updates and news.
          </p>
          <form>
            <p>
              <input
                type="text"
                required
                placeholder={CONTACT_FORM_TEXT.NAME}
                ref={inputName}
                name="Name"
              />
              <input
                type="email"
                required
                placeholder={CONTACT_FORM_TEXT.EMAIL}
                ref={inputEmail}
                name="Email"
              />
            </p>
            <p>
              <textarea
                ref={inputMessage}
                name="message"
                type="text"
                placeholder={CONTACT_FORM_TEXT.HOW_CAN_HELP}
                rows="2"
                required
              />
            </p>
            <p>
              <Checkbox
                id="privacy-checkbox"
                checked={privacyAccepted}
                onClick={handleAcceptPrivacyPolicy}
                label={
                  <>
                    {CONTACT_FORM_TEXT.READ_AND_UNDERSTOOD}
                    <Link
                      as={`${SECONDARY_PAGES.PRIVACY_POLICY.name}`}
                      href={SECONDARY_PAGES.PRIVACY_POLICY.url}
                    >
                      <a>{SECONDARY_PAGES.PRIVACY_POLICY.name}</a>
                    </Link>
                  </>
                }
              />
            </p>
            <p>
              <button type="submit" className="main-button">
                Submit
              </button>
            </p>
          </form>
        </form>
      </div>
    </Layout>
  );
}


export default Contact
