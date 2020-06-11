import React, {useState} from 'react'
import styles from './nav.module.scss'
import Link from 'next/link'
import SubscribeComponent from './subscribe'
import { ARRAY_PAGES } from '../constants/routes'

const Nav = () => {
  let [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      {!isOpen && (
        <div className={styles.menu}>
          <button onClick={handleOpen}>
            <img src="/icon-hamburguer.svg" width="33px" height="16px"></img>
          </button>
          <div className={styles.menuBackground}></div>
        </div>
      )}
      {isOpen && (
        <div className={styles.open}>
          <button onClick={handleClose}>
            <img src="/icon-close.svg" width="20px" height="20px"></img>
          </button>

          <ul className="uk-navbar-nav">
            {ARRAY_PAGES.map((page) => {
              return (
                <li key={page.url}>
                  <Link as={`${page.url}`} href={page.url}>
                    <a onClick={handleClose}>{page.name}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
          <SubscribeComponent/>
        </div>
      )}
    </>
  );
};

export default Nav
