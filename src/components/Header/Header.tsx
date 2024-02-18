import React from 'react';

import styles from './Header.module.scss';
import { HeaderNav } from '../HeaderNav';
import { HeaderSocial } from '../HeaderSocial';
import { useMediaQuery } from 'react-responsive';

import burger from '../../assets/icons/burger.png';

export const Header = () => {
  const isDesktop = useMediaQuery({ minWidth: '1200px' });

  return (
    <header className={styles.header}>
      <div className={styles.paddingContent}>
        <div className={styles.headerContent}>
          <h2 className={styles.logo}>
            Anton <span className={styles.logoWhite}>Baranskyi</span>
          </h2>

          {isDesktop ? (
            <>
              <HeaderNav />
              <HeaderSocial />
            </>
          ) : (
            <img src={burger} alt='burger' className='icon' />
          )}
        </div>
      </div>
    </header>
  );
};
