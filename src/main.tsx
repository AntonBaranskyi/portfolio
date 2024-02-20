import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.scss';
import { MainProvider } from './context/MainContext.tsx';
import { Root } from './routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainProvider>
      <Root />
    </MainProvider>
  </React.StrictMode>
);
