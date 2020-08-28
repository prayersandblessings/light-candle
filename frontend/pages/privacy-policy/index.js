import React, { useState } from 'react'
import Layout from '../../components/layout'
import styles from './index.module.scss'

const PrivacyPolicy = () =>(
    <Layout>
      <div className={styles.container}>
        <span className="caption">OUR</span>
        <h1 className="title">Privacy Policy</h1>

        <p>Last updated</p>
        <p><strong>INTRODUCTION</strong></p>
        <p>A lot of text</p>
      </div>
    </Layout>
  );

export default PrivacyPolicy
