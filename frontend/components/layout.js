import React, {useState} from 'react'
import Head from 'next/head'
import Nav from './nav'
import TopNav from './TopNav'
import styles from './layout.module.scss'

const Layout = ({ children, classNameSection = 'default' }) => {
  let [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Head>
        <title>Prayers & Blessings</title>
        <meta charSet="utf-8" />
        <meta name="description" content="When we light a candle, we can connect with the light in our own heart. This ritual is a prayer in itself."/>
        <meta property="og:title" content="Prayers & Blessings"/>
        <meta property="og:description" content="When we light a candle, we can connect with the light in our own heart. This ritual is a prayer in itself."/>
        <meta property="og:image" content="/social-candle.jpg"/>
        <meta property="twitter:title" content="Prayers & Blessings"/>
        <meta property="twitter:description" content="When we light a candle, we can connect with the light in our own heart. This ritual is a prayer in itself."/>
        <meta property="twitter:image" content="/social-candle.jpg"/>
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <TopNav />
      <>

        <img src='/backgrounds/default.jpg' className={`${styles.image} ${styles.default} ${classNameSection === 'default' || classNameSection === 'home' ? styles.visible: ''}`} />
        <img src='/backgrounds/our-intention.jpg' className={`${styles.image} ${styles.ourStory} ${classNameSection === 'ourStory' ? styles.visible: ''}`} />
        <img src='/backgrounds/light-a-candle.jpg' className={`${styles.image} ${styles.lightACandle} ${classNameSection === 'lightACandle' ? styles.visible: ''}`} />
        <img src='/backgrounds/receive-blessing.jpg'className={`${styles.image} ${styles.receiveAblessing} ${classNameSection === 'receiveAblessing' ? styles.visible: ''}`}/>
        <img src='/backgrounds/prayer-humanity.jpg'className={`${styles.image} ${styles.aPrayerForHumanity} ${classNameSection === 'aPrayerForHumanity' ? styles.visible: ''}`}/>
        <img src='/backgrounds/who-we-are.jpg'className={`${styles.image} ${styles.whoWeAre} ${classNameSection === 'whoWeAre' ? styles.visible: ''}`} />
        <img src='/backgrounds/contact.jpg'className={`${styles.image} ${styles.contact} ${classNameSection === 'contact' ? styles.visible: ''}`} />
        <img src='/backgrounds/subscribe.jpg'className={`${styles.image} ${styles.subscribe} ${classNameSection === 'subscribe' ? styles.visible: ''}`} />
        <img src='/backgrounds/privacy.jpg'className={`${styles.image} ${styles.privacyPolicy} ${classNameSection === 'privacyPolicy' ? styles.visible: ''}`} />
        
        <div className={styles.content}>{children}</div>
      </>

      <Nav isOpen={isOpen} handleClose={handleClose} handleOpen={handleOpen} />
    </>
  );
}



export default Layout
