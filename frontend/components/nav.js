import React, {useState} from 'react'
import styles from './nav.module.scss'
import Link from 'next/link'
import { ARRAY_PAGES } from '../constants/routes'

const SuscribeComponent = () => {
  const onSubmit = () => {
    alert('Submiting');
  }
  return (
    <div>
      <span>RECEIVE</span>
      <h1>Updates & News</h1>
      <p>
        Join the Prayers & Blessings community and receive our latest updates and news.
      </p>
      <p>
        <input type='text' className={styles.input} placeholder='Your name' />
        <input type='text' className={styles.input} placeholder='Your surname' />
      </p>
      <p>
        <input type='email' className={styles.input} placeholder='Your email' />
        <button type='submit' className={styles.submitButton} onClick={onSubmit}>Submit</button>
      </p>
    </div>
  );
}

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
          <button onClick={handleOpen}>Open</button>
        </div>
      )}
      {isOpen && (
        <div className={styles.open}>
          <button onClick={handleClose}>X</button>

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
          <SuscribeComponent/>
        </div>
      )}
    </>
  );
};

export default Nav
