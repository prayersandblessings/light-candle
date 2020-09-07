import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import Router from 'next/router'
import axios from '../lib/axios'
import styles from './view-candle.module.scss'
import StayHereQuietly from '../components/StayHereQuietly'
import {
  NEXT_BUTTON_TEXT
} from '../constants/text';

const SECTIONS = {
  STEP1: 'CANDLE_MESSAGE',
  STEP2: 'SHOW_VIDEO',
  STEP3: 'END',
}

const ViewCandle = ({candleId}) => {
  const [showSection, setSection] = useState(SECTIONS.STEP1);
  const [candleContent, setcandleContent] = useState({
    message: '',
    author: '',
    sound: { 
      sound: {

      }
    }
  });

  useEffect(() => {
      if(candleId) {
        axios.get(`/api/candle/detail?candleId=${candleId}`).then( ({data: { 
          content 
        }}) => {
          if(!content) {
            Router.push('/')
          }{}
          setcandleContent(content);
        }).catch(error => {
          setcandleContent({});
          Router.push('/')
        })
      }
  }, [candleId])


  const handleNextSection = (section) => () => {
    setSection(section);
  }

  return (
    <Layout backgroundState={showSection === SECTIONS.STEP2 ? 'video': 'img'}>
      {showSection === SECTIONS.STEP1 && !!candleContent && (
        <div className={styles.container}>

          <div className={styles.messageReceived}>
            <p>
              {candleContent.message}
            </p>
            <p>
              {candleContent.author}
            </p>
            <button onClick={handleNextSection(SECTIONS.STEP2)} className={'next-button'}>
              <img src="/icon-arrow-right.svg" width="44px"/>
              <span>{NEXT_BUTTON_TEXT}</span>
            </button>
          </div>
        </div>
      )}
      {showSection === SECTIONS.STEP2 && (
        <StayHereQuietly soundUrl={ candleContent.sound !== null ? candleContent.sound.sound.url : '' } />
      )}
    </Layout>
  );
};

// This gets called on every request
export async function getServerSideProps(req) {
  const { candleId = 0 } = req.query;
  return { props: { candleId } }
}

export default ViewCandle;
