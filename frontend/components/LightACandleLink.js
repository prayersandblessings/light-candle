import React from 'react'
import styles from './LightACandleLink.module.scss'
import Link from 'next/link'
import PAGES from '../constants/routes'

const LightCandleLink = () => {
  return (
    <div className={styles.LightACandleLink}>
      <div className={styles.Divider}></div>
      <Link as={`${PAGES.LIGHT_A_CANDLE.url}`} href={PAGES.LIGHT_A_CANDLE.url}>
        <button>
          <span className={styles.caption + ' caption'}>Light</span>
          <span className={styles.lightCandleButton}>
            A candle
            <img src="/icon-arrow-right.svg" width="64px"></img>
          </span>
        </button>
      </Link>
    </div>
  );
};

export default LightCandleLink;
