import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, ProjectPage } from '../pages';
import App from '../App';

export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<HomePage />} />

          <Route path='project'>
            <Route path=':projectId' element={<ProjectPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
