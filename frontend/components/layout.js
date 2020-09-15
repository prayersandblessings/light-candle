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
        <title>Prayers and blessings</title>
        <meta charSet="utf-8" />
        <meta name="description" content="The ritual of lighting a candle is ancient and sacred. When we light a candle, we can connect with the light in our own heart. This ritual is a prayer in itself."/>
        <meta property="og:title" content="Prayers and blessings"/>
        <meta property="og:description" content="The ritual of lighting a candle is ancient and sacred. When we light a candle, we can connect with the light in our own heart. This ritual is a prayer in itself."/>
        <meta property="og:image" content="https://images.unsplash.com/photo-1528351655744-27cc30462816?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>
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
