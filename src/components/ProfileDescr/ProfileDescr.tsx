import React from 'react';

import styles from './ProfileDescr.module.scss';

const experienceData = [
  { num: '5', text: 'years of experience' },
  { num: '13', text: 'completed projects using differnt stack' },
];

export const ProfileDescr = () => {
  return (
    <div className={styles.profileDescr}>
      <p className={styles.profileGreeting}>Hello, I am</p>
      <p className={styles.profileName}>&lt;Anton Baranskyi/&gt;</p>
      <p className={styles.profileRole}>Fullstack Developer</p>
      <div className={styles.profileExpWrapper}>
        {experienceData.map((item) => (
          <div className={styles.profileExpItemWrapper} key={item.num}>
            <p className={styles.profileYear}>{item.num}</p>
            <p className={styles.profileText}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
