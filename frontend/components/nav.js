import React from 'react'
import styles from './nav.module.scss'
import Link from 'next/link'
import { ARRAY_PAGES, ARRAY_SECONDARY_PAGES } from '../constants/routes'

const Nav = ({isOpen, handleClose, handleOpen}) => {
  
  return (
    <>
      {!isOpen && (
        <button onClick={handleOpen} className={styles.openMenuButton}>
          <img src="/icon-hamburguer.svg" width="33px" height="16px"></img>
        </button>
      )}
      {isOpen && (
        <>
          <div className={styles.menuCloseUp} onClick={handleClose} />
          <div className={styles.open}>
            <button onClick={handleClose}>
              <img src="/icon-close.svg" width="20px" height="20px"></img>
            </button>
            <div className={styles.navContainer}>
              <ul className={styles.navbar}>
                {ARRAY_PAGES.map((page) => {
                  if(page.disabled == true) {
                    return;
                  }
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
            <div className={styles.divider}></div>
            <ul className={styles.secondaryNav}>
              {ARRAY_SECONDARY_PAGES.map((page) => {
                return (
                  <li key={page.url}>
                    <Link as={`${page.url}`} href={page.url}>
                      <a onClick={handleClose}>{page.name}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <span className={styles.legals}>
              © 2020 Lapis International Pty Ltd, All rights reserved.
            </span>
          </div>
        </>
      )}
    </>
  );
};

export default Nav
