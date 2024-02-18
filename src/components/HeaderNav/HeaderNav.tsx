import React from 'react';

import styles from './HeaderNav.module.scss';

const navigationData = [
  { title: 'About', href: '#about' },
  { title: 'Skills', href: '#skills' },
  { title: 'Projects', href: '#projects' },
];

export const HeaderNav = () => {
  return (
    <nav>
      <ul className={styles.navigation}>
        {navigationData.map((nav) => (
          <li key={nav.title} className={styles.navigationItem}>
            <a className={styles.navigationLink} href={nav.href}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
