import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'

import Layout from '../../../components/layout';
import PAGES from '../../../constants/routes'
import SelectSound from './SelectSound';
import StayHereQuietly from '../../../components/StayHereQuietly';

import styles from './index.module.scss';
const URL_VIDEO_SILENCE = 'https://player.vimeo.com/video/453162488';

const SECTIONS = {
  STEP1: 'SELECT_SOUND',
  STEP2: 'MEDITATE',
}

const sounds = [
  {
      value: 'flute',
      label: 'Flute' ,
      enabled: true,
      sound: {
        url: '/sound-flute.mp3'
      }
    },
    {
      value: 'piano',
      label: 'Piano' ,
      enabled: true,
      sound: {
        url: '/sound-piano.mp3'
      }
    },
    { value: 'silence', label: "Silence" },
];

/**
 * Main Component
 * @param {*} param 
 */
const Meditate = () => {
  const [showSection, setSection] = useState(SECTIONS.STEP1);
  const [urlSoundSelected, seturlSoundSelected] = useState('')

  const handleSoundSelected = (sound) => {
    
    const {sound: {url : soundUrl } = {} } = sounds.find(({value}) => value === sound.value) || {};
    
    seturlSoundSelected(soundUrl)
    setSection(SECTIONS.STEP2);
  }

  const openNewWidow = () => {
    const miniCandle = window.open('', '_blank', 'width=700,height=400,scrollbars=yes,resizable=yes');
    miniCandle.document.write('<style>body { margin: 0px; } </style>')
    miniCandle.document.write('<img src="/candle-email.gif"></img>')
  }
  
  return (
    <>
      <StayHereQuietly
        className={`${styles.StayHereQuietly}  ${
          showSection === SECTIONS.STEP1 ? styles.hidden : ""
        }`}
        videoURL={URL_VIDEO_SILENCE}
        firstFrame={
          <>
            <span className={"caption"}>Touch to light your candle</span>
            <h2 className={"title"}>And meditate</h2>
          </>
        }
        secondFrame={
          <>
            <button
              className={`${styles.icon} ${styles.downloadCandleIcon}`}
              onClick={openNewWidow}
            >
              <span>Save your candle</span>
            </button>

            <Link
              as={`${PAGES.RECEIVE_A_BLESSING.url}`}
              href={PAGES.RECEIVE_A_BLESSING.url}
            >
              <a className={`${styles.icon} ${styles.receiveABlessingIcon}`}>
                <span>{PAGES.RECEIVE_A_BLESSING.name}</span>
              </a>
            </Link>
          </>
        }
        soundUrl={urlSoundSelected}
        hideSecondFrame={false}
      />

      <Layout classNameSection={PAGES.LIGHT_A_CANDLE.className}>
        <div className={styles.container + " " + styles.prayerContainter}>
          {showSection === SECTIONS.STEP1 && (
            <>
              <span className="caption">Light your candle</span>
              <h3 className="title">And meditate</h3>
              <p className="caption">Select the music you wish to listen to</p>
              <SelectSound
                onSoundSelected={handleSoundSelected}
                sounds={sounds}
              />
            </>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Meditate;
