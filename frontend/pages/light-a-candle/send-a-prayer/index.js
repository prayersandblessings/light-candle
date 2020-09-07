import React, { useState, useEffect, useRef } from 'react';

import Layout from '../../../components/layout';
import StayHereQuietly from '../../../components/StayHereQuietly';

import PAGES from '../../../constants/routes'

import styles from './index.module.scss';
import WritePrayer from './WritePrayer';

const SECTIONS = {
  STEP1: 'WRITE_PRAYER',
  STEP2: 'LIGHT_CANDLE_VIDEO',
}

const getMailChimp = (params) => {
  !function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/dfce319091d7722bb7f1f4d7d/fb5a3b22b4259d278e20dbbc6.js")
}

const URL_VIDEO_SILENCE = 'https://player.vimeo.com/video/453162488';
/**
 * Main Component
 * @param {*} param 
 */
const SendAPrayer = () => {
  const [showSection, setSection] = useState(SECTIONS.STEP1);
  const handlePrayerWritten = (senderName, senderEmail, receipentName, receipentEmail, message) => {
    console.log(senderName, senderEmail, receipentName, receipentEmail, message)
    // setPrayer({...prayer, name, nameReceipent, email, message});
    getMailChimp();
    // setSection(SECTIONS.STEP2);
  }

  const handleLightCandle = () => {
    const { language, sound, name, email, message } = prayer 
    
    if(!language || !name || !email || !message ) {
      alert('An error has ocurred, files are missing');
      return;
    }

    axios.post('/api/light-a-candle/new', prayer).then( (result) => {
      setSection(SECTIONS.STEP7);
    }).catch(error => {
      alert('An error has ocurred');
      setSection(SECTIONS.STEP7);
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
              TOUCH THE CANDLE
            </span>
            <h2 className={styles.title + " title"}>To send your prayer</h2>
          </>
        }
        secondFrame={
          <>
            <span className={styles.caption + " caption"}>
              YOUR CANDLE AND PRAYER
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
