import React, { useState, useEffect, useRef } from 'react';
import Layout from '../../../components/layout';

import PAGES from '../../../constants/routes'

import styles from './index.module.scss';

/**
 * Main Component
 * @param {*} param 
 */
const Meditate = () => {
  const [showSection, setSection] = useState('');

  return (
    <Layout classNameSection={PAGES.LIGHT_A_CANDLE.className}>
      Meditate
    </Layout>
  );
};

export default Meditate;
