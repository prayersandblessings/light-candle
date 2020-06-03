import React, { useState } from 'react';
import Layout from '../components/layout';
import ReactPlayer from 'react-player';
import Link from 'next/link';
import PAGES from '../constants/routes';
import {
  NEXT_BUTTON__TEXT,
  SELECT_YOUR_LANGUAGE_TEXT,
  INTRODUCTION_TEXT,
  FORM_TEXT,
  SELECT_SOUND_TEXT,
  TOUCH_TEXT
} from '../constants/text';

const AVAILABLE_SONGS = [
  {
    value: 'url-sit-insilence',
    name: 'Sit in silence'
  },
  {
    value: 'url-rolling-waves',
    name: 'Sound of rolling waves'
  },
  {
    value: 'url-bansuri-flute',
    name: 'Bansuri flute'
  }
];

const LANGUAGES = ['English', 'Español'];
const SECTIONS = {
  STEP1: 'SELECT_LANGUAGE',
  STEP2: 'INTRODUCTION',
  STEP3: 'FORM',
  STEP4: 'SOUND',
  STEP5: 'TOUCH_YOUR_CANDLE',
  STEP6: 'A_LONG_AS_YOU_WISH',
  STEP7: 'END'
}

const LightACandle = () => {
  const [showSection, setSection] = useState(SECTIONS.STEP1);
  const [languageSelected, setLanguage] = useState('English');
  const [songSelected, setSong] = useState(AVAILABLE_SONGS[0].value);

  const handleSelectLanguage = () => {
    setLanguage(languageSelected);
  }

  const handleNextSection = (section) => () => {
    setSection(section);
    console.log(section);
  }

  const handleSelectSong = () => {
    setSong(songSelected);
    setSection(SECTIONS.STEP5);
  }

  const handleLightCandle = () => {
    // start video
    setSection(SECTIONS.STEP6);
  }

  const onVideoEnd = () => {
    setSection(SECTIONS.STEP7);
  }

  return (
    <Layout>
      {showSection === SECTIONS.STEP1 && (
        <>
          <h2>{SELECT_YOUR_LANGUAGE_TEXT.TITLE}</h2>

          <br />
          <select onChange={(e) => handleSelectLanguage(e)}>
            {LANGUAGES.map((language) => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </select>

          <br />
          <button onClick={handleNextSection(SECTIONS.STEP2)}>
            -----> {NEXT_BUTTON__TEXT}
          </button>
        </>
      )}

      {showSection === SECTIONS.STEP2 && (
        <>
          <h2>{INTRODUCTION_TEXT.SUBTITLE}</h2>
          <h1>{INTRODUCTION_TEXT.TITLE}</h1>
          <p>{INTRODUCTION_TEXT.TITLE}</p>
          <p>{INTRODUCTION_TEXT.CANDLE}</p>
          <button onClick={handleNextSection(SECTIONS.STEP3)}>
            {INTRODUCTION_TEXT.WRITE_PRAYER}
            <i>+</i>
          </button>
        </>
      )}

      {showSection === SECTIONS.STEP3 && (
        <>
          <button onClick={handleNextSection(SECTIONS.STEP2)}>X Close</button>
          <h4>{FORM_TEXT.TITLE_1}</h4>
          <h3>{FORM_TEXT.TITLE_1}</h3>
          <input type="text" placeholder={FORM_TEXT.WRITE_NAME} />
          <br />
          <input type="text" placeholder={FORM_TEXT.WRITE_EMAIL} />
          <br />
          <textarea type="text" placeholder={FORM_TEXT.WRITE_PRAYER} />
          <br />
          <button onClick={handleNextSection(SECTIONS.STEP4)}>
            -----> {NEXT_BUTTON__TEXT}
          </button>
        </>
      )}

      {showSection === SECTIONS.STEP4 && (
        <>
          <h2>{SELECT_SOUND_TEXT.TITLE}</h2>

          <br />
          <select onChange={(e) => handleSelectSong(e)}>
            {AVAILABLE_SONGS.map(({value, name}) => (
              <option key={value} value={value}>
                {name}
              </option>
            ))}
          </select>
        </>
      )}

      {showSection === SECTIONS.STEP5 && (
        <>
          <h2>
            {TOUCH_TEXT.SUBTITLE}
          </h2>
          <h1>{TOUCH_TEXT.TITLE}</h1>
          <br />
          <button onClick={handleLightCandle}>
            Light candle Icon
          </button>
        </>
      )}

      {showSection === SECTIONS.STEP6 && (
        <>
          Show video
          {/* http://techslides.com/demos/sample-videos/small.mp4 */}
          <ReactPlayer url='/small.mp4' playing onEnded={onVideoEnd}/>
        </>
      )}

      {showSection === SECTIONS.STEP7 && (
        <>
        <Link
          as={`${PAGES.HOME.url}`}
          href={PAGES.HOME.url}
        >
          Go Home
        </Link>
        </>
      )}


    </Layout>
  );
};

export default LightACandle;
