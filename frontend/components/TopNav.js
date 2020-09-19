import React from 'react'
import styles from './TopNav.module.scss'
import Link from 'next/link'
import { ARRAY_PAGES } from '../constants/routes'

const Nav = () => {
  
  return (
    <div className={styles.TopNav}>
      <div className={styles.navContainer}>
        <ul className={styles.navbar}>
          {ARRAY_PAGES.map((page) => {
            if(page.disabled == true) {
              return;
            }
            return (
              <li key={page.url}>
                <Link as={`${page.url}`} href={page.url}>
                  <a>{page.name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Nav
