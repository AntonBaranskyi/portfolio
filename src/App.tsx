import { About } from './components/About';
import { Header } from './components/Header';
import { MainProfile } from './components/MainProfile';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

function App() {
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
}

export default App;
