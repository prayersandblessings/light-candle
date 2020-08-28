import React, { useState, useRef } from 'react'
import Layout from '../../components/layout'
import ContactForm from './ContactForm'
import styles from './index.module.scss'

const SECTIONS = {
  STEP1: 'FORM',
  STEP2: 'SUBMITED',
}

const Contact = () => {
  const [showSection, setSection] = useState(SECTIONS.STEP1);

  const handleSumbitForm = () => {
    setSection(SECTIONS.STEP2);
  }

  return (
    <Layout>
      <div className={styles.container}>
        <span className="caption">GENERAL INQUIRIES</span>
        <h1 className="title">Contact us</h1>
        {showSection === SECTIONS.STEP1 && (
          <ContactForm onSubmitForm={handleSumbitForm} />
        )}
        {showSection === SECTIONS.STEP2 && (
          <p>Thank you for your message! We will reply as soon as possible.</p>
        )}
      </div>
    </Layout>
  );
}


export default Contact
