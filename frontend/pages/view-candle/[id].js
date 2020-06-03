import React, { useState } from 'react';
import Layout from '../../components/layout';
import ReactPlayer from 'react-player'
import Link from 'next/link'
import PAGES from '../../constants/routes'
import {
  NEXT_BUTTON__TEXT
} from '../../constants/text';
import { getCandleInfo } from '../../lib/api'

const SECTIONS = {
  STEP1: 'CANDLE_MESSAGE',
  STEP2: 'SHOW_VIDEO',
  STEP3: 'END',
}

const ViewCandle = ({candleContent}) => {
  const [showSection, setSection] = useState(SECTIONS.STEP1);
  const onVideoEnd = () => {
    setSection(SECTIONS.STEP3);
  }

  const handleNextSection = (section) => () => {
    setSection(section);
    console.log(section);
  }

  return (
    <Layout>
      {showSection === SECTIONS.STEP1 && (
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


export async function getStaticPaths() {
  // const categories = (await getCandleInfo()) || []
  return {
    paths: [
      {
        params: {
          id: '33333',
        }
      }
    ]
    ,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const candleContent = (await getCandleInfo(params.id)) || []
  return {
    props: { candleContent }
  }
}

export default ViewCandle;
