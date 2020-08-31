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

/**
 * Main Component
 * @param {*} param 
 */
const SendAPrayer = () => {
  const [showSection, setSection] = useState('');
  const handlePrayerWritten = (name, nameReceipent, email, message) => {
    setPrayer({...prayer, name, nameReceipent, email, message});
    setSection(SECTIONS.STEP2);
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
      <StayHereQuietly />
      {showSection === SECTIONS.STEP1 && (
        <WritePrayer onPrayerWritten={handlePrayerWritten} />
      )};
      
    </Layout>
  );
};

export default SendAPrayer;
