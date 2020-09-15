import React, { useState } from 'react'

import Layout from '../../components/layout'
import SubscribeComponent from '../../components/Subscribe'
import { SECONDARY_PAGES } from '../../constants/routes'

import styles from './index.module.scss'


const SECTIONS = {
  STEP1: 'FORM',
  STEP2: 'SUBMITED',
}

const Subscribe = () => {
  
  const [showSection, setSection] = useState(SECTIONS.STEP1);

  const handleSubscribe = (status) => {
    if(status) {
      setSection(SECTIONS.STEP2)
    }
    else {
      alert('An error has ocurred');
    }
  }

  return (
    <Layout classNameSection={SECONDARY_PAGES.SUBSCRIBE.className}>
        <div className={styles.container}>
          <span className="caption">Latest News</span>
          <h2 className="title">Subscribe</h2>
          { showSection === SECTIONS.STEP1  && (
            <>
              <p>
                You can register and stay up to date with the latest news from Prayers & Blessings.
              </p>
            </>
          )}
          <SubscribeComponent regularMailingProp={true} onSubscribe={handleSubscribe}/>
        </div>
    </Layout>
  );
}


export default Subscribe
