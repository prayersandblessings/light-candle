import React, { useState, useEffect, useRef } from 'react';

import Layout from '../../../components/layout';
import StayHereQuietly from '../../../components/StayHereQuietly';

import PAGES from '../../../constants/routes'
import axios from '../../../lib/axios'

import styles from './index.module.scss';
import WritePrayer from './WritePrayer';

const SECTIONS = {
  STEP1: 'WRITE_PRAYER',
  STEP2: 'LIGHT_CANDLE_VIDEO',
}

const URL_VIDEO_SILENCE = 'https://player.vimeo.com/video/453162488';
/**
 * Main Component
 * @param {*} param 
 */
const SendAPrayer = () => {
  const [showSection, setSection] = useState(SECTIONS.STEP1);

  const handlePrayerWritten = ({senderName, senderEmail, receipentName, receipentEmail, message, regularMailingAccepted}) => {
    if(!senderName || !senderEmail || !receipentName || !receipentEmail || !message ) {
      alert('An error has ocurred, files are missing');
      return;
    }

    axios.post('/api/send-email', {
      regularMailingAccepted,
      senderName,
      senderEmail,
      name: receipentName,
      email: receipentEmail,
      message
    }).then( (result) => {
      setSection(SECTIONS.STEP2);
    }).catch(error => {
      alert('An error has ocurred');
    })
  }

  return (
    <Layout classNameSection={PAGES.LIGHT_A_CANDLE.className}>
      <StayHereQuietly
        className={`${styles.StayHereQuietly}  ${
          showSection === SECTIONS.STEP1 ? styles.hidden : ""
        }`}
        videoURL={URL_VIDEO_SILENCE}
        firstFrame={
          <>
            <span className={styles.caption + " caption"}>
              Touch the candle
            </span>
            <h2 className={styles.title + " title"}>To send your prayer</h2>
          </>
        }
        secondFrame={
          <>
            <span className={styles.caption + " caption"}>
              Your candle and prayer
            </span>
            <h2 className={styles.title + " title"}>Have been sent</h2>
          </>
        }
      />
      {showSection === SECTIONS.STEP1 && (
        <WritePrayer onPrayerWritten={handlePrayerWritten} />
      )}
    </Layout>
  );
};

export default SendAPrayer;
