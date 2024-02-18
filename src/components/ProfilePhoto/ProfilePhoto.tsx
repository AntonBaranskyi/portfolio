import React from 'react';

import styles from './ProfilePhoto.module.scss';

import person from '../../assets/images/person.png';

import reactPhoto from '../../assets/icons/react.png';

import ts from '../../assets/icons/ts.png';

import node from '../../assets/icons/node.png';

export const ProfilePhoto = () => {
  return (
    <div className={styles.profilePhoto}>
      <img src={person} alt='person' className={styles.profilePhotoItem} />
      <div className={styles.reactWrapper}>
        <div className={styles.insideReactWrapper}>
          <img
            src={reactPhoto}
            alt='react'
            className={styles.insideReactPhoto}
          />
        </div>
      </div>

      <div className={styles.tsWrapper}>
        <div className={styles.insideTsWrapper}>
          <img src={ts} alt='ts' className={styles.insideTsPhoto} />
        </div>
      </div>

      <div className={styles.nodeWrapper}>
        <div className={styles.insideNodeWrapper}>
          <img src={node} alt='node' className={styles.insideNodePhoto} />
        </div>
      </div>
    </div>
  );
};
