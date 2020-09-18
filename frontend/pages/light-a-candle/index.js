import React, { useState } from 'react';
import Link from 'next/link'

import Layout from '../../components/layout';
import PAGES from '../../constants/routes';
import { TwitterShareButton, FacebookShareButton } from "react-share";

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
const CandleIcon = ({ type: {title, className, url }}) => {
  
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
  let URL = '';

  if (global.window) {
    URL = window.location.href;
  }

  const [showSection, setSection] = useState('');
  let [isOpen, setIsOpen] = useState(false);

  const handleOpenClose = () => {
    setIsOpen( !isOpen );
  };

  return (
    <Layout classNameSection={PAGES.LIGHT_A_CANDLE.className}>
      <div className={styles.container} >
        <CandleIcon type={TYPES.SEND_A_PRAYER} />
        <CandleIcon type={TYPES.MEDITATE} />

        <div className={`${styles.candleLink} ${styles.postACandle}`} onClick={handleOpenClose}>
          <div className={styles.icon} />
          <div className={styles.title} >Post a candle</div>
          {isOpen && (
            <label>
              <TwitterShareButton url={URL} title="Send your candle.">
                <div className={styles.shareTwitter}></div>
              </TwitterShareButton>

              <FacebookShareButton url={URL} quote={"Send your candle."}>
              <div className={styles.shareFacebook}></div>
              </FacebookShareButton>
            </label>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default LightACandle;
