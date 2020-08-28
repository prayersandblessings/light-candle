import React, { useState, useEffect, useRef } from 'react';

import Layout from '../../../components/layout';

import PAGES from '../../../constants/routes'

import styles from './index.module.scss';
import WritePrayer from './WritePrayer';


/**
 * Main Component
 * @param {*} param 
 */
const SendAPrayer = () => {
  const [showSection, setSection] = useState('');

  return (
    <Layout classNameSection={PAGES.LIGHT_A_CANDLE.className}>
        <WritePrayer />
    </Layout>
  );
};

export default SendAPrayer;
