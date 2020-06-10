import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'
import PAGES from '../constants/routes'
import styles from './index.module.scss'

export const LinkCandle = ({url, name}) => {
  return (
    <Link as={url} href={url}>
      <a>
        {name}
        <img src="/icon-arrow-down.svg" className={styles.iconArrow}/>
        <img src="/candle.png" className={styles.singleCandle} />
      </a>
    </Link>
  )
}


const Home = () => {
  return (
    <Layout>
      <p className={styles.caption}>
        OFFER YOUR PRAYERS AND BLESSINGS
      </p>
      <h1 className={styles.title}>
        To the world
      </h1>
      <div className={styles.candles}>
        <LinkCandle url={PAGES.ABOUT_US.url} name={PAGES.ABOUT_US.name} />
        <LinkCandle url={PAGES.LIGHT_A_CANDLE.url} name={PAGES.LIGHT_A_CANDLE.name} />
        <LinkCandle url={PAGES.LIBRARY.url} name={PAGES.LIBRARY.name} />
      </div>
    </Layout>
  )
}


export default Home
