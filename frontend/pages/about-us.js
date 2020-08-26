import React from 'react'
import Layout from '../components/layout'
import Link from 'next/link'
import PAGES from '../constants/routes'
import styles from './about-us.module.scss'

const AboutUs = () => {
  return (
    <Layout backgroundState = 'color'>
        <div className={styles.container}>
          <span className={styles.caption + ' caption'}>Our</span>
          <h2 className={styles.title + ' title'}>Intention</h2>
          <div className={styles.ourIntention}>
            <div className={styles.scroll}>
              <div></div>
              <span className={'caption'}>Scroll</span>
            </div>
            <p> The intention behind the Prayers and Blessings website is for people everywhere to experience peace, inspiration and solace through the power of prayer and the offering of blessings. May people everywhere readily access their own inner strength through cultivating the practice of offering prayers and blessings.</p>
          </div>
          <div className={styles.ourStory}>
            <div>
              <h2 className={'title'}>Our Story</h2>
              <p>During the devastating bushfires in Australia during 2019 and into 2020 we noticed that many communities around the world started to gather and offer their prayers for Australia. We heard stories of the Australian Indigenous people performing corroborees, Buddhists around the world offering mantras, people gathering in churches, temples, mosques to call on a sacred, benevolent power to end the fires through the manifestation of rain. Others less inclined to believe in a divine power, visualised the dowsing of the fires by a widespread falling of gentle, penetrating and nurturing rain.</p>
            </div>
            <img src="/about-us.jpg"></img>
          </div>
          <div className={styles.complementary}>
            <p>We observed that many people who engaged in such activities discovered a haven of solace within. From this place they were able to share their positive feelings and actions with others, making a difference to people, wildlife and the environment. Widespread rains fell across many of the firegrounds in January 2020 and by March 31st 2020 the last of the fires were extinguished.</p>
            <p>We had long held the thought that a place accessible to everyone, where people could focus their sweet intentions no matter what the reason was needed in the world.</p>
            <p>This became more relevant as the fires came to an end and the world was gripped by Covid-19 and all public places of ritual and prayer were closed due to lockdowns.</p>
            <p>We decided to create this virtual sacred hub to ensure in all places, times and circumstances, people could come together as a universal community and make offerings of prayers and blessings. And in doing so, contribute to a vibration of peace, love and positive action around the world.</p>
            <div className="divider"></div>
            <Link
              as={`${PAGES.LIGHT_A_CANDLE.url}`}
              href={PAGES.LIGHT_A_CANDLE.url}
            >
              <button>
                <span className={'caption'}>Light</span>
                <span className={styles.lightCandleButton}>
                  A candle 
                  <img src='/icon-arrow-right.svg' width='52px'></img>
                </span>
              </button>
            </Link>
          </div>
        </div>
    </Layout>
  );
}


export default AboutUs
