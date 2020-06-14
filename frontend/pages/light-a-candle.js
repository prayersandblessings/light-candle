import React, { useState, useEffect, useRef } from 'react';
import Layout from '../components/layout';
import ReactPlayer from 'react-player';
import Link from 'next/link';
import PAGES from '../constants/routes';
import axios from '../lib/axios'

import {
  NEXT_BUTTON__TEXT,
  SELECT_YOUR_LANGUAGE_TEXT,
  INTRODUCTION_TEXT,
  FORM_TEXT,
  SELECT_SOUND_TEXT,
  TOUCH_TEXT
} from '../constants/text';


const SECTIONS = {
  STEP1: 'SELECT_LANGUAGE',
  STEP2: 'INTRODUCTION',
  STEP3: 'FORM',
  STEP4: 'SOUND',
  STEP5: 'TOUCH_YOUR_CANDLE',
  STEP6: 'A_LONG_AS_YOU_WISH',
  STEP7: 'END'
}

/**
 * Component to writte Prayer
 * @param {callback} onPrayerWritten
 * @param {callback} onCloseForm
 */
const WritePrayerSection = ({ onPrayerWritten, onCloseForm })  => {
  const inputName = useRef(null);
  const inputEmail = useRef(null);
  const inputMessage = useRef(null);

  const onClickNext = () => {
    const { current : { value: name = '' }} = inputName;
    const { current : { value: email = '' }} = inputEmail;
    const { current : { value: message = '' }} = inputMessage;
    onPrayerWritten(name, email, message);
  }

  return (
    <>
      <button onClick={onCloseForm}>X Close</button>

      <h4>{FORM_TEXT.TITLE_1}</h4>
      <h3>{FORM_TEXT.TITLE_2}</h3>

      <input ref={inputName} type="text" placeholder={FORM_TEXT.WRITE_NAME} />
      <br />

      <input ref={inputEmail} type="text" placeholder={FORM_TEXT.WRITE_EMAIL} />
      <br />

      <textarea ref={inputMessage} type="text" placeholder={FORM_TEXT.WRITE_PRAYER} />
      <br />

      <button onClick={onClickNext}>
        -----> {NEXT_BUTTON__TEXT}
      </button>
    </>
  )  
} 

/**
 * Component to select the language
 * @param {callback} onLanguageSelected  
 * @param {Array} languages list of languages
 */
const SelectLanguageSection = ({ onLanguageSelected, languages})  => {
  const selectLanguage = useRef(null);

  const onClickNext = () => {
    const { current : { value: language = '' }} = selectLanguage;
    onLanguageSelected(language);
  }

  return (
    <>
      <h2>{SELECT_YOUR_LANGUAGE_TEXT.TITLE}</h2>

      <br />
      <select ref={selectLanguage}>
        {languages.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>

      <br />
      <button onClick={onClickNext}>
        -----> {NEXT_BUTTON__TEXT}
      </button>
    </>
  )
  
} 

/**
 * Component to select the language
 * @param {callback} onSoundSelected  
 * @param {Array} sounds list of languages
 */
const SelectSoundSection = ({ onSoundSelected, sounds})  => {
  const soundSelected = useRef(null);
  const [soundUrl, setSoundUrl] = useState(null);
  let likeAudio;

  const onClickNext = () => {
    const { current : { value: sound = '' }} = soundSelected;
    if(likeAudio) {
      likeAudio.stop();
    }
    onSoundSelected(sound);
  }
  const onSelectChange = () => {
    const { current: {
        selectedOptions: [selectedOption]
    }} = soundSelected;

    const url = selectedOption.getAttribute('soundurl');
    

    if(!url){
      setSoundUrl(null);
      return;
    }

    setSoundUrl(process.env.NEXT_PUBLIC_API_URL + url);
  }

  return (
    <>
      <h2>{SELECT_SOUND_TEXT.TITLE}</h2>

      <br />
      <select ref={soundSelected} defaultValue={null} onChange={onSelectChange}>
        <option value={0}>
          Sit In silence
        </option>
        {sounds.map(({id, name, sound: { url }}) => (
          <option key={id} value={id} soundurl={url}>
            {name}
          </option>
        ))}
      </select>

      {soundUrl && (
        <audio src={soundUrl} controls autoPlay/>
      )}

      <br />
      <button onClick={onClickNext}>
        -----> {NEXT_BUTTON__TEXT}
      </button>
    </>
  )
} 


/**
 * Main Component
 * @param {*} param0 
 */
const LightACandle = () => {
  const [showSection, setSection] = useState(SECTIONS.STEP1);
  const [prayer, setPrayer] = useState({
    language: null,
    sound: null,
    name: null,
    email: null,
    message: null
  });

  const [languagesList, setLanguages] = useState([]);
  const [soundsList, setSounds] = useState([]);
  const [totalPrayers, setTotalPrayers] = useState(0);

  const handleNextSection = (section) => () => {
    setSection(section);
  }

  const handleLanguageSelected = (language) => {
    setPrayer({...prayer, language});
    setSection(SECTIONS.STEP2);
  }

  const handlePrayerWritten = (name, email, message) => {
    setPrayer({...prayer, name, email, message});
    setSection(SECTIONS.STEP4);
  }

  const handleSoundSelected = (sound) => {
    setPrayer({...prayer, sound});
    setSection(SECTIONS.STEP5);
  }

  const handleLightCandle = () => {
    const { language, sound, name, email, message } = prayer 
    
    if(!language || !name || !email || !message ) {
      alert('An error has ocurred, files are missing');
      return;
    }

    axios.post('/api/light-a-candle/new', prayer).then( (result) => {
      console.log(result)
      setSection(SECTIONS.STEP6);
    }).catch(error => {
      alert('An error has ocurred');
      setSection(SECTIONS.STEP6);
    })
  }

  const onVideoEnd = () => {
    setSection(SECTIONS.STEP7);
  }

  const handleLightACandleValues = (languages = [], sounds = [], totalPrayers = 0) => {
    setLanguages(languages);
    setSounds(sounds);
    setTotalPrayers(totalPrayers)
  }

  useEffect(()=>{
    axios.get('/api/light-a-candle').then( ({ data : {
      languages,
      totalPrayers,
      sounds
    } }) => {
      handleLightACandleValues(languages, sounds, totalPrayers);
    }).catch(error => {
      alert('An error has ocurred');
      handleLightACandleValues([], [], totalPrayers);
    })
  },[])

  return (
    <Layout>
      {showSection === SECTIONS.STEP1 && (
        <SelectLanguageSection onLanguageSelected={handleLanguageSelected} languages={languagesList} />
      )}

      {showSection === SECTIONS.STEP2 && (
        <>
          <h2>{INTRODUCTION_TEXT.SUBTITLE}</h2>
          <h1>{INTRODUCTION_TEXT.TITLE}</h1>
          <p>{INTRODUCTION_TEXT.TITLE}</p>
          <p>{totalPrayers} {INTRODUCTION_TEXT.CANDLE}</p>
          <button onClick={handleNextSection(SECTIONS.STEP3)}>
            {INTRODUCTION_TEXT.WRITE_PRAYER}
            <i>+</i>
          </button>
        </>
      )}

      {showSection === SECTIONS.STEP3 && (
        <WritePrayerSection
          onCloseForm={handleNextSection(SECTIONS.STEP2)}
          onPrayerWritten={handlePrayerWritten}
          />
      )}

      {showSection === SECTIONS.STEP4 && (
        <SelectSoundSection
          onSoundSelected={handleSoundSelected}
          sounds={soundsList}
        />
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
