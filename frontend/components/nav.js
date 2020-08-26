import React from 'react'
import styles from './nav.module.scss'
import Link from 'next/link'
import { ARRAY_PAGES } from '../constants/routes'

const Nav = ({isOpen, handleClose, handleOpen}) => {
  
  return (
    <>
      {!isOpen && (
        <div className={styles.openCloseMenu}>
          <button onClick={handleOpen}>
            <img src="/icon-hamburguer.svg" width="33px" height="16px"></img>
          </button>
        </div>
      )}
      {isOpen && (
        <div className={styles.open}>
          <div className={styles.openCloseMenu}>
            <button onClick={handleClose}>
              <img src="/icon-close.svg" width="20px" height="20px"></img>
            </button>
            <div className={styles.menuBackground}></div>
          </div>
          <div className={styles.navContainer}>
            <ul className={styles.navbar}>
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
          </div>
        </div>
      )}
    </>
  );
};

export default Nav
