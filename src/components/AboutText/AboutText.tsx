import React from 'react';

import styles from './AboutText.module.scss';

export const AboutText = () => {
  return (
    <div className={styles.aboutText}>
      <h2 className={styles.aboutTitle + ' title'}>
        aboutMe<span>( )</span>
      </h2>
      <p className={styles.aboutText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer velit
        turpis, finibus eu condimentum ut, posuere at ipsum. Maecenas vel
        consequat mauris. Quisque sodales ipsum aliquet aliquam placerat. Proin
        varius condimentum sapien. Mauris quis elit nibh. Morbi ut facilisis
        nisl. Duis et leo ut odio rhoncus porta a a dui. Nullam arcu nibh,
        bibendum in enim sed, ullamcorper feugiat nunc.
      </p>
    </div>
  );
};
