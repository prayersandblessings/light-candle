
import React, {useState} from 'react'
import styles from './subscribe.module.scss'

const SubscribeComponent = () => {
  const onSubmit = () => {
    alert('Submiting');
  }
  return (
    <div className={styles.subscribeComponent}>
      <span className="caption">RECEIVE</span>
      <h1 className="title">Updates & News</h1>
      <p>
        Join the Prayers & Blessings community and receive our latest updates and news.
      </p>
      <form>
        <p>
          <input type='text' placeholder='Your name' />
          <input type='text' placeholder='Your surname' />
        </p>
        <p>
          <input type='email' placeholder='Your email' />
          <button type='submit' className="main-button" onClick={onSubmit}>Subscribe</button>
        </p>
      </form>
    </div>
  );
}

export default SubscribeComponent;