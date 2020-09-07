import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'

import Layout from '../../../components/layout';
import PAGES from '../../../constants/routes'
import SelectSound from './SelectSound';
import axios from '../../../lib/axios'
import StayHereQuietly from '../../../components/StayHereQuietly';

import styles from './index.module.scss';

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
  const [urlSoundSelected, seturlSoundSelected] = useState('')

  const handleSoundSelected = (sound) => {
    
    const {sound: {url : soundUrl } = {} } = soundsList.find(({id}) => id === sound) || {};
    
    seturlSoundSelected(soundUrl)
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

  const openNewWidow = () => {
    const miniCandle = window.open('', '_blank', 'width=280,height=498,scrollbars=yes,resizable=yes');
    miniCandle.document.write('<style>body { margin: 0px; }</style>')
    miniCandle.document.write('<img src="/little-candle.gif"></img>')
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
            <span className={"caption"}>
              Touch the candle
            </span>
            <h2 className={"title"}>To send your prayer</h2>
          </>
        }
        secondFrame={
          <>
            <button
              className={`${styles.icon} ${styles.downloadCandleIcon}`}
              onClick={openNewWidow}
            >
              Download candle
            </button>

            <Link
              as={`${PAGES.RECEIVE_A_BLESSING.url}`}
              href={PAGES.RECEIVE_A_BLESSING.url}
            >
              <a className={`${styles.icon} ${styles.receiveABlessingIcon}`}>
                {PAGES.RECEIVE_A_BLESSING.name}
              </a>
            </Link>
          </>
        }
        soundUrl={urlSoundSelected}
        hideSecondFrame={false}
      />

      <div className={styles.container + " " + styles.prayerContainter}>
        {showSection === SECTIONS.STEP1 && (
          <>
            <span className="caption">Light your candle</span>
            <h3 className="title">And meditate</h3>
            <p className="caption">Select the music you wish to listen to</p>
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
