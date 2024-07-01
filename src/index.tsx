import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Cards from './components/Cards/Cards';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Cards></Cards>
  </React.StrictMode>
);

reportWebVitals();
