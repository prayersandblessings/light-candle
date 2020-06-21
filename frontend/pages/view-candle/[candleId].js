import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout';
import ReactPlayer from 'react-player'
import Link from 'next/link'
import PAGES from '../../constants/routes'
import Router, { useRouter } from 'next/router'
import axios from '../../lib/axios'
import {
  NEXT_BUTTON__TEXT
} from '../../constants/text';

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
        axios.get(`/api/candle/${candleId}`).then( ({data: { 
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
        <div>
          <p>
            {candleContent.message}
          </p>
          <p>
            {candleContent.author}
          </p>
          <br />
          <button onClick={handleNextSection(SECTIONS.STEP2)}>
            -----> {NEXT_BUTTON__TEXT}
          </button>
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
  const { candleId } = req.query;
  console.log(candleId);
  return { props: { candleId } }
}

export default ViewCandle;
