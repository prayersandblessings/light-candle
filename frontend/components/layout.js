import React, {useState} from 'react'
import Head from 'next/head'
import Nav from './nav'
import TopNav from './TopNav'
import styles from './layout.module.scss'
import BackgroundVideo from './BackgroundVideo/BackgroundVideo';


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
      {classNameSection !== "video" && (
        <>
          <div className={`${styles.image} ${styles[classNameSection]}`} />
          <div className={styles.content}>{children}</div>
        </>
      )}

      {classNameSection === "video" && (
        <>
          <BackgroundVideo>
            <div className={styles.content}>{children}</div>
          </BackgroundVideo>
        </>
      )}
      <Nav isOpen={isOpen} handleClose={handleClose} handleOpen={handleOpen} />
    </>
  );
}



export default Layout
