
import React, {useState} from 'react'
import styles from './subscribe.module.scss'

const SubscribeComponent = () => {
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

export default SubscribeComponent;