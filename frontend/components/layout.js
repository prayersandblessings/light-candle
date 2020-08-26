import React, {useState} from 'react'
import Nav from './nav'
import TopNav from './TopNav'
import styles from './layout.module.scss'
import BackgroundVideo from './BackgroundVideo/BackgroundVideo';


const Layout = ({ children, backgroundState = 'img' }) => {
  let [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <TopNav />
      {backgroundState === 'img' && (
        <>
          <div className={styles.image} />
          <div className={styles.content}>
            {children}
          </div>
        </>
      )}
      {
        backgroundState === 'color' && (
          <>
            <div className={`${styles.content} ${styles.color}`}>
              {children}
            </div>
          </>
      )}
      {
        backgroundState === 'video' && (
          <>
            <BackgroundVideo >
              <div className={styles.content}>
                {children}
              </div>
            </BackgroundVideo>
          </>
      )}
      
      <Nav isOpen={isOpen} handleClose={handleClose} handleOpen={handleOpen} />
    </>
  )
}



export default Layout
