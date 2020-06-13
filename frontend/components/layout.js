import React, {useState} from 'react'
import Nav from './nav'
import styles from './layout.module.scss'
import Link from 'next/link'
import PAGES from '../constants/routes'

const SecondaryNav = ({handleOpen}) => (
  <div className={styles.secondaryNav}>
    <Link as={PAGES.A_BLESSING_DAY.url} href={PAGES.A_BLESSING_DAY.url}>
      <a>
        A Blessing a Day
      </a>
    </Link> |
    <a onClick={handleOpen}>Subscribe</a>
    <ul>
      <li>
        <a href="" className={styles.facebook}>Facebook</a>
      </li>
      <li>
        <a href="" className={styles.twitter}>Twitter</a>
      </li>
    </ul>
  </div>
)

const Layout = ({ children, backgroundState = 'img' }) => {
  let [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  let backgroundStyle;

  switch ( backgroundState ) {
    case 'color':
      backgroundStyle = styles.color;
      break;
    case 'video':
      backgroundStyle = styles.video;
      break;
    default:
      backgroundStyle = styles.image;
  }

  return (
    <> 
      <div className={`${styles.content} ${backgroundStyle}`}>
        {children}
      </div>
      <Nav isOpen={isOpen} handleClose={handleClose} handleOpen={handleOpen} />
      <SecondaryNav handleOpen={handleOpen}/>
    </>
  )
}



export default Layout
