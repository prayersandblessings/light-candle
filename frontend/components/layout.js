import React, {useState} from 'react'
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
