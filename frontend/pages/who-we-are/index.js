import React from 'react'

import PAGES from '../../constants/routes'
import LightCandleLink from '../../components/LightACandleLink'
import Layout from '../../components/layout'

import styles from './index.module.scss'

const WhoWeAre = () => {
  return (
    <Layout classNameSection={PAGES.WHO_WE_ARE.className}>
        <div className={styles.container}>
          <span className={styles.caption + ' caption'}>Who</span>
          <h2 className={styles.title + ' title'}>We are</h2>

          <div className={styles.whoWeAreText}>
            <span className='caption'>ANGELA - PRODUCER</span>
            <p>Angela is an altruistic dreamer, a meditator and a philanthropist. From the time she was a young girl she has believed that the hearts and minds of people and the nature of the universe could be affected through the power of prayer and the offering of blessings. This initiative is a manifestation of her dream that all people everywhere access their innate power to pray and in doing so make a positive contribution to the world.</p>
          </div>


          <div className={styles.whoWeAreText + ' ' + styles.director}>
            <span className='caption'>PHIL - DIRECTOR</span>
            <p>  Phil lives with wife and two boys in Sydney, Australia. He loves his family, the ocean and being a filmmaker. With a deep interest in spirituality since childhood Phil has travelled the world in pursuit of a deeper understanding of this much loved topic and delights in any opportunity to further his own inner exploration. It’s his wish for people everywhere to experience the change they long for in the world as an expression of the peace they seek within themselves.</p>
          </div>

          <h2 className={styles.title + ' title'}>Acknowledgements</h2>

          <div className={styles.whoWeAreText}>
            <span className='caption'>JACQUELINE - CONTENT EDITOR</span>
            <p> Thank you to our dear friend, Jacqueline, for contributing her good will, time and editing skills to the development of this website.</p>
          </div>

          <div className={styles.whoWeAreText + ' ' + styles.effects}>
          <span className='caption'>EFFECT OR FILMS - WEBSITE DESIGN AND ANIMATION</span>
            <p> We extend our gratitude to Annia, Cristina, Franz, Eduardo and the whole team at Effects or Films in Mexico, who have masterfully manifested our vision in the design of this website.</p>
          </div>

          <div className={styles.whoWeAreText}>
            <span className='caption'>NASH NAUBERT AND GAYSIL - BANSURI FLUTE COMPOSITION</span>
            <p> Thank you to Nash for his beautiful Bansuri flute composition and Gaysil for supporting him in his creation.</p>
          </div>

          <div className={styles.ligthCandleButton}>
            <LightCandleLink />
          </div>
        </div>
    </Layout>
  );
}


export default WhoWeAre
