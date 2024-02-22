import { useContext } from 'react';
import styles from './HeaderNav.module.scss';
import { MainContext } from '../../context/MainContext';

const navigationData = [
  { title: 'About', href: '#about' },
  { title: 'Skills', href: '#skills' },
  { title: 'Projects', href: '#projects' },
];

export const HeaderNav = () => {
  const { isBurgerOpen } = useContext(MainContext);

  return (
    <nav>
      <ul
        className={styles.navigation}
        data-isOpen={isBurgerOpen ? 'true' : 'false'}
      >
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
