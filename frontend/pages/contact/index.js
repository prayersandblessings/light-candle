import React, { useState, useRef } from 'react'
import Layout from '../../components/layout'
import ContactForm from './ContactForm'
import styles from './index.module.scss'
import { SECONDARY_PAGES } from '../../constants/routes'
import PAGES from '../../constants/routes'
import Link from 'next/link'
import axios from '../../lib/axios'
import Spinner from '../../components/Spinner'

const SECTIONS = {
  STEP1: 'FORM',
  STEP2: 'SUBMITED',
}

const Contact = () => {
  const [showSection, setSection] = useState(SECTIONS.STEP1);
  const [showSpinner, setShowSpinner] = useState(false);

  const handleSumbitForm = ({name, email, message}) => {
    setShowSpinner(true);

    axios.post('/api/contact', {
      name,
      email,
      message
    }).then( (result) => {
      setShowSpinner(false)

      setSection(SECTIONS.STEP2);
    }).catch(error => {
      setShowSpinner(false)

      alert('An error has ocurred');
    })
  }

  return (
    <Layout classNameSection={SECONDARY_PAGES.CONTACT.className}>
      <div className={styles.container}>
        <span className="caption">GENERAL INQUIRIES</span>
        <h2 className="title">Contact us</h2>
        {showSection === SECTIONS.STEP1 && (
          <ContactForm onSubmitForm={handleSumbitForm} />
        )}
        {showSection === SECTIONS.STEP2 && (
          <div>
            <p>Thank you for your message! We will reply as soon as possible.</p>
            <Link as={PAGES.LIGHT_A_CANDLE.url} href={PAGES.LIGHT_A_CANDLE.name}>
              <button className={styles.candleButton + ' candle-button'}>
                <img src="/icon-more.png"></img>
                Light a Candle
              </button>
            </Link>
          </div>
        )}
      </div>

      {showSpinner && <Spinner />}
    </Layout>
  );
}


export default Contact
