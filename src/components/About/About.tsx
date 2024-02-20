import React from 'react';

import styles from './About.module.scss';
import { AboutText } from '../AboutText';
import { AboutRole } from '../AboutRole';

export const About = () => {
  return (
    <div className={styles.about} id='about'>
      <div className='container'>
        <div className={styles.aboutContent}>
          <AboutText />
          <AboutRole />
        </div>
      </div>
    </div>
  );
};
