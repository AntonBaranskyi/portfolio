import { Header } from '../components/Header';
import { MainProfile } from '../components/MainProfile';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';

import styles from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <>
      <div className={styles.topWrapper}>
        <Header />
        <MainProfile />
      </div>
      <About />
      <Skills />
      <Projects />
    </>
  );
};
