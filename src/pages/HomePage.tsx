import { Header } from '../components/Header';
import { MainProfile } from '../components/MainProfile';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';

export const HomePage = () => {
  return (
    <>
      <div style={{ height: '100vh' }}>
        <Header />
        <MainProfile />
      </div>
      <About />
      <Skills />
      <Projects />
    </>
  );
};
