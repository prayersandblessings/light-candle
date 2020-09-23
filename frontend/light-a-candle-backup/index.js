import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'
import Dropdown from 'react-dropdown';

import Layout from '../../components/layout';
import StayHereQuietly from '../../components/StayHereQuietly/StayHereQuietly'
import axios from '../../lib/axios'
import PAGES from '../../constants/routes'


import styles from './index.module.scss';

import {
  NEXT_BUTTON_TEXT,
  SELECT_YOUR_LANGUAGE_TEXT,
  INTRODUCTION_TEXT,
  FORM_TEXT,
  SELECT_SOUND_TEXT,
  TOUCH_TEXT
} from '../../constants/text';


const SECTIONS = {
  STEP1: 'SELECT_LANGUAGE',
  STEP2: 'INTRODUCTION',
  STEP3: 'INTRODUCTION_2',
  STEP4: 'FORM',
  STEP5: 'SOUND',
  STEP6: 'TOUCH_YOUR_CANDLE',
  STEP7: 'A_LONG_AS_YOU_WISH'
}

/**
 * Component to writte Prayer
 * @param {callback} onPrayerWritten
 * @param {callback} onCloseForm
 */
const WritePrayerSection = ({ onPrayerWritten, onCloseForm })  => {
  const inputName = useRef(null);
  const inputreceipentName = useRef(null);
  const inputEmail = useRef(null);
  const inputMessage = useRef(null);

  const onHandleSubmit = (event) => {
    event.preventDefault();
    const { current : { value: name = '' }} = inputName;
    const { current : { value: receipentName = '' }} = inputreceipentName;
    const { current : { value: email = '' }} = inputEmail;
    const { current : { value: message = '' }} = inputMessage;
    onPrayerWritten(name, receipentName,email, message);
  }

  return (
    <>
      <div className={styles.container + ' ' + styles.prayerContainter}>
        <form  onSubmit={onHandleSubmit} className={styles.prayerForm}> 
          <button onClick={onCloseForm}>
            <img src='/icon-close.svg' width='16px'></img>
            <span>Close</span>
          </button>
          <span className="caption">{FORM_TEXT.TITLE_1}</span>
          <h3 className="title">{FORM_TEXT.TITLE_2}</h3>

          <input
            ref={inputName}
            type="text"
            name="Sender"
            placeholder={FORM_TEXT.WRITE_NAME}
            required
            />
          
          <input
            ref={inputreceipentName}
            type="text"
            name="Recipient"
            placeholder={FORM_TEXT.WRITE_RECEIPENT_NAME}
            required
          />

          <input
            ref={inputEmail}
            name="receiver_email"
            type="email"
            placeholder={FORM_TEXT.WRITE_EMAIL}
            required
            />

          <textarea
            ref={inputMessage}
            name="message"
            type="text"
            placeholder={FORM_TEXT.WRITE_PRAYER}
            rows="2"
            required
            />

          <button type="submit">
            <img src='/icon-arrow-right.svg' width='44px'></img>
          </button>
        </form>
      </div>
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

  const onClickNext = (e) => {
    const { current : { value: language = '' }} = selectLanguage;
    onLanguageSelected(language);
  }

  return (
    <>
      <div className={styles.container}>
        <span className="caption">{SELECT_YOUR_LANGUAGE_TEXT.TITLE}</span>

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
          ----- {NEXT_BUTTON_TEXT}
        </button>
      </div>
    </>
  )
  
} 

/**
 * Component to select the language
 * @param {callback} onSoundSelected  
 * @param {Array} sounds list of languages
 */
const SelectSoundSection = ({ onSoundSelected, sounds})  => {
  const [selectedValue, setSelectedValue] = useState(0);
  const [soundUrl, setSoundUrl] = useState(null);
  const onClickNext = () => {
    onSoundSelected(selectedValue.value);
  }

  const onSelectChange = (selectedOption) => {
    setSelectedValue(selectedOption)

    const [{sound: {url : soundUrl } = {} } = {}] = sounds.filter( ({id}) => id == selectedOption.value);
    if(!soundUrl){
      setSoundUrl(null);
      return;
    }

    setSoundUrl(soundUrl);
  }

  const selectOptions = [
    {value: 0, label:'Sit In silence'}, 
    ...sounds.map(({id: value, name: label }) => (
      { value, label }
    )
    )
  ];
  
  return (
    <>
      <div className={styles.container + ' ' + styles.selectMusic}>
        <span className="caption">{SELECT_SOUND_TEXT.TITLE}</span>
        <br />
        <Dropdown
          options={selectOptions}
          onChange={onSelectChange}
          value={selectedValue}
          controlClassName="controlDropDown"
          menuClassName="menuDropDown"
          />

        {soundUrl && (
          <audio src={soundUrl} controls autoPlay/>
        )}

        <br />
        <button onClick={onClickNext} className="next-button">
          <img src='/icon-arrow-right.svg' width='52'></img>
          <span>{NEXT_BUTTON_TEXT}</span>
        </button>
      </div>
    </>
  )
} 

/**
 * Main Component
 * @param {*} param0 
 */
const LightACandle = () => {
  const [showSection, setSection] = useState('');
  const [prayer, setPrayer] = useState({
    language: null,
    sound: null,
    name: null,
    nameReceipent: null,
    email: null,
    message: null
  });
  const [urlSoundSelected, seturlSoundSelected] = useState('')

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

  const handlePrayerWritten = (name, nameReceipent, email, message) => {
    setPrayer({...prayer, name, nameReceipent, email, message});
    setSection(SECTIONS.STEP5);
  }

  const handleSoundSelected = (sound) => {
    setPrayer({...prayer, sound});

    const [ 
      { sound: { url: soundUrl } = {} } = {}
    ] = soundsList.filter(({id}) => id ===  sound) || '';
    seturlSoundSelected(soundUrl === 0 ? '' : soundUrl);

    setSection(SECTIONS.STEP6);
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

  const handleLightACandleValues = (languages = [], sounds = [], totalPrayers = 0) => {
    if(languages.length === 1) {
      const [ { id: defaultLanguage } ] = languages
      setPrayer({...prayer, language: defaultLanguage });
      setSection(SECTIONS.STEP2);
    } else {
      setSection(SECTIONS.STEP1);
    }

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

  const openNewWidow = () => {
    const miniCandle = window.open('', '_blank', 'width=280,height=498,scrollbars=yes,resizable=yes');
    miniCandle.document.write('<img src="/candle-email.gif"></img>')
  }

  return (
    <Layout classNameSection={PAGES.LIGHT_A_CANDLE.className}>
      {showSection === SECTIONS.STEP1 && (
        <SelectLanguageSection onLanguageSelected={handleLanguageSelected} languages={languagesList} />
      )}

      {showSection === SECTIONS.STEP2 && (
        <>
          <div className={styles.container + ' ' + styles.stepOne}>
            <span className="caption">{INTRODUCTION_TEXT.SUBTITLE}</span>
            <h1 className={styles.title + ' title'}>{INTRODUCTION_TEXT.TITLE}</h1>
            <button onClick={handleNextSection(SECTIONS.STEP3)}>
              <img src="/icon-arrow-right.svg" width="52px"></img>
            </button>
          </div>
        </>
      )}

      {showSection === SECTIONS.STEP3 && (
        <>
          <div className={styles.container + ' ' + styles.stepTwo}>
            <span className="caption">{INTRODUCTION_TEXT.DESCRIPTION_ONE}</span>
            <h1 className={styles.title + ' title'}>{INTRODUCTION_TEXT.DESCRIPTION_TWO}</h1>
            <p>
              {INTRODUCTION_TEXT.DESCRIPTION_THREE} 
              <Link as={PAGES.LIBRARY.url} href={PAGES.LIBRARY.url}>
                <a> resource library </a>
              </Link>
              {INTRODUCTION_TEXT.DESCRIPTION_FOUR}
            </p>
            <p className={styles.lit}>{totalPrayers} {INTRODUCTION_TEXT.CANDLE}</p>
            <button onClick={handleNextSection(SECTIONS.STEP4)}>
              <p>{INTRODUCTION_TEXT.WRITE_PRAYER}</p>
              <img src='/icon-more.png' width='32px'></img>
            </button>
          </div>
        </>
      )}

      {showSection === SECTIONS.STEP4 && (
        <WritePrayerSection
          onCloseForm={handleNextSection(SECTIONS.STEP2)}
          onPrayerWritten={handlePrayerWritten}
          />
      )}

      {showSection === SECTIONS.STEP5 && (
        <SelectSoundSection
          onSoundSelected={handleSoundSelected}
          sounds={soundsList}
        />
      )}

      {showSection === SECTIONS.STEP6 && (
        <>
          <div className={styles.container + ' ' + styles.touchCandle}>
            <span className="caption">{TOUCH_TEXT.SUBTITLE}</span>
            <h1 className={styles.title + ' title'}>{TOUCH_TEXT.TITLE}</h1>
            <button onClick={handleLightCandle} className={styles.candleButton}>
              <img src="/candle.png" />
            </button>
          </div>
        </>
      )}

      {showSection === SECTIONS.STEP7 && (
        <StayHereQuietly soundUrl={urlSoundSelected} />
      )}
    </Layout>
  );
};

export default LightACandle;
