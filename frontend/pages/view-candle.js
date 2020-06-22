import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import ReactPlayer from 'react-player'
import Link from 'next/link'
import PAGES from '../constants/routes'
import Router, { useRouter } from 'next/router'
import axios from '../lib/axios'
import styles from './view-candle.module.scss'
import {
  NEXT_BUTTON__TEXT
} from '../constants/text';

const SECTIONS = {
  STEP1: 'CANDLE_MESSAGE',
  STEP2: 'SHOW_VIDEO',
  STEP3: 'END',
}

const ViewCandle = ({candleId}) => {
  const [showSection, setSection] = useState(SECTIONS.STEP1);
  const [candleContent, setcandleContent] = useState({});

  useEffect(() => {
    console.log('Rendered', candleId)
      if(candleId) {
        axios.get(`/api/candle/detail?candleId=${candleId}`).then( ({data: { 
          content 
        }}) => {
          if(!content) {
            Router.push('/')
          }
          setcandleContent(content);
        }).catch(error => {
          setcandleContent({});
          Router.push('/')
        })
      }
  }, [candleId])


  const onVideoEnd = () => {
    setSection(SECTIONS.STEP3);
  }

  const handleNextSection = (section) => () => {
    setSection(section);
    console.log(section);
  }
  

  return (
    <Layout>
      {showSection === SECTIONS.STEP1 & !!candleContent && (
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
              <span>{NEXT_BUTTON__TEXT}</span>
            </button>
          </div>
        </div>
      )}
      {showSection === SECTIONS.STEP2 && (
        <>
          Show video
          {/* http://techslides.com/demos/sample-videos/small.mp4 */}
          <ReactPlayer url={candleContent.urlVideo} playing onEnded={onVideoEnd} />
        </>
      )}
      {showSection === SECTIONS.STEP3 && (
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

// This gets called on every request
export async function getServerSideProps(req) {
  const { candleId = 0 } = req.query;
  return { props: { candleId } }
}

export default ViewCandle;
