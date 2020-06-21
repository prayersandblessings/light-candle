import React from 'react'
import Layout from '../components/layout'
import styles from './a-blessing-a-day.module.scss'


const ABlessingADay = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <span className="caption">A Blessing</span>
        <h2 className={styles.title + ' title'}>A Day</h2>
        <p className={styles.paragraph}>A blessing a day is a word that reflects a noble quality. You will receive this word every day, and by implementing it into your life you will add to the positive energy in the world.</p>
        <form className={styles.subscribeForm}>
          <input type="email" placeholder="Your email" className="secondary"></input>
          <img src="/icon-arrow-right.svg" width="44px"></img>
          <input type="submit" value="Subscribe"></input>
        </form>
      </div>
    </Layout>
  )
}


export default ABlessingADay
