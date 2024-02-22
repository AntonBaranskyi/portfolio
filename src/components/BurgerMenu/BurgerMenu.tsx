import { Header } from '../Header';
import { HeaderNav } from '../HeaderNav';
import { HeaderSocial } from '../HeaderSocial';
import styles from './BurgerMenu.module.scss';

export const BurgerMenu = () => {
  return (
    <div className={styles.burgerMenu}>
      <Header />

      <div className='container'>
        <HeaderNav />

        <HeaderSocial />
      </div>
    </div>
  );
};
