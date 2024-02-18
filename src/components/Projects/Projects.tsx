import React from 'react';

import styles from './Projects.module.scss';

export const Projects = () => {
  return (
    <div className={styles.projects}>
      <div className='container'>
        <h2 className={styles.projectTitle+ ' title'}>
          projects<span>( )</span>
        </h2>
      </div>
    </div>
  );
};
