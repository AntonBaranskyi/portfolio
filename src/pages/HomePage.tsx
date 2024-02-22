import { Header } from '../components/Header';
import { MainProfile } from '../components/MainProfile';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';

import styles from './HomePage.module.scss';
import { BurgerMenu } from '../components/BurgerMenu';
import { useContext } from 'react';
import { MainContext } from '../context/MainContext';
import { ContactMe } from '../components/ContactMe';

export const HomePage = () => {
  const { isBurgerOpen } = useContext(MainContext);

  return (
    <>
      <div className={styles.topWrapper}>
        <Header />
        <MainProfile />
      </div>
      <About />
      <Skills />
      <Projects />
      <ContactMe />

      {isBurgerOpen && <BurgerMenu />}
    </>
  );
};
