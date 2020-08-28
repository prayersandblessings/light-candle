import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'
import Dropdown from 'react-dropdown';

import Layout from '../../components/layout';
// import StayHereQuietly from '../../components/StayHereQuietly/StayHereQuietly'
import axios from '../../lib/axios'
import PAGES from '../../constants/routes'

import styles from './index.module.scss';

const TYPES = {
  SEND_A_PRAYER: {
    title: 'LIGHT A CANDLE, SEND A PRAYER',
    className: 'sendAPrayer',
    url: 'send-a-prayer'
  },
  MEDITATE: {
    title: 'LIGHT A CANDLE AND MEDITATE',
    className: 'meditate',
    url: 'meditate'
  },
  POST_CANDLE: {
    title: 'POST A CANDLE',
    className: 'postACandle'
  }
}
const CandleIcon = ({ type: {title, className, url}}) => {
  
  return (
    <Link
      as={`${PAGES.LIGHT_A_CANDLE.url}/${url}`}
      href={`${PAGES.LIGHT_A_CANDLE.url}/${url}`}>
      <div 
        className={`${styles.candleLink} ${styles[className]}`}
        role='button'
        tabIndex='0'
      >
        <div className={styles.icon} />
        <div className={styles.title} >{title}</div>
      </div>
    </Link>
  )
}

/**
 * Main Component
 * @param {*} param 
 */
const LightACandle = () => {
  const [showSection, setSection] = useState('');

  return (
    <Layout classNameSection={PAGES.LIGHT_A_CANDLE.className}>
      <div className={styles.container} >
        <CandleIcon type={TYPES.SEND_A_PRAYER} />
        <CandleIcon type={TYPES.MEDITATE} />
        <CandleIcon type={TYPES.POST_CANDLE} />
      </div>
    </Layout>
  );
};

export default LightACandle;
