import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'
import PAGES from '../constants/routes'
import styles from './index.module.scss'

export const LinkCandle = ({url, name}) => {
  return (
    <Link as={url} href={url}>
      <a>
        <div className={styles.candleTitle}>
          {name}
          <img src="/icon-arrow-down.svg" className={styles.iconArrow}/>
        </div>
        <img src="/candle.png" className={styles.singleCandle} />
      </a>
    </Link>
  )
}


const Home = () => {
  return (
    <Layout backgroundState='img'>
      <div className={styles.container}>
        <div className={styles.showText}>
          <span className="caption">Offer your</span>
          <h1 className="title">Prayers and Blessings</h1>
        </div>
        <div className={styles.candles}>
          <LinkCandle url={PAGES.LIGHT_A_CANDLE.url} name={PAGES.LIGHT_A_CANDLE.name} />
        </div>
      </div>
    </Layout>
  )
}


export default Home
