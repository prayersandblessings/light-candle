import React, { useState } from 'react'

import { SECONDARY_PAGES } from '../../constants/routes'
import Layout from '../../components/layout'
import styles from './index.module.scss'

const PrivacyPolicy = () =>(
    <Layout classNameSection={SECONDARY_PAGES.PRIVACY_POLICY.className}>
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
