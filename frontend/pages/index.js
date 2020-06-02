import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'
import PAGES from '../constants/routes'
import styles from './index.module.scss'

const Home = () => {
  return (
    <Layout>
      <p>
        OFFER YOUR PRAYERS AND BLESSINGS
      </p>
      <h1>
        To the World
      </h1>
      <div className={styles.candles}>
        <Link as={`${PAGES.ABOUT_US.url}`} href={PAGES.ABOUT_US.url}>
          {PAGES.ABOUT_US.name}
        </Link>
        <Link as={`${PAGES.LIGHT_A_CANDLE.url}`} href={PAGES.LIGHT_A_CANDLE.url}>
          {PAGES.LIGHT_A_CANDLE.name}
        </Link>
        <Link as={`${PAGES.LIBRARY.url}`} href={PAGES.LIBRARY.url}>
          {PAGES.LIBRARY.name}
        </Link>
      </div>
    </Layout>
  )
}


export default Home
