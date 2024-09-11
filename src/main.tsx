import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRoutes } from './app/routers/AppRoutes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRoutes/>
  </React.StrictMode>
);
