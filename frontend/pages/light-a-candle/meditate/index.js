import React, { useState, useEffect, useRef } from 'react';
import Layout from '../../../components/layout';

import PAGES from '../../../constants/routes'

import styles from './index.module.scss';
import SelectSound from './SelectSound';
import axios from '../../../lib/axios'
import StayHereQuietly from '../../../components/StayHereQuietly';

const SECTIONS = {
  STEP1: 'SELECT_SOUND',
  STEP2: 'MEDITATE',
}

const URL_VIDEO_SILENCE = 'https://player.vimeo.com/video/453162488';

/**
 * Main Component
 * @param {*} param 
 */
const Meditate = () => {
  const [showSection, setSection] = useState(SECTIONS.STEP1);
  const [soundsList, setSounds] = useState([]);
  const [loading, setloading] = useState(true);
  const handleSoundSelected = (params) => {
    setSection(SECTIONS.STEP2);
  }


  useEffect(()=>{
    
    axios.get('/api/light-a-candle').then( ({ data : {
      sounds
    } }) => {
      setloading(false);
      setSounds(sounds);
    }).catch(error => {
      alert('An error has ocurred');
      setSounds([]);
      setloading(false);
    })
  },[]);

  
  return (
    <Layout classNameSection={PAGES.LIGHT_A_CANDLE.className}>
      <div className={styles.container + " " + styles.prayerContainter}>
        <StayHereQuietly
          className={`${styles.StayHereQuietly}  ${
            showSection === SECTIONS.STEP1 ? styles.hidden : ""
          }`}
          videoURL={URL_VIDEO_SILENCE}
        />
        
        {showSection === SECTIONS.STEP1 && (
          <>
          <span className="caption">LIGHT YOUR CANDLE</span>
          <h3 className="title">And meditate</h3>
          {!loading && (
            <SelectSound
              onSoundSelected={handleSoundSelected}
              sounds={soundsList}
            />
          )}
          {loading && <>Loading</>}
          </>
        )}
      </div>
    </Layout>
  );
};

export default Meditate;
