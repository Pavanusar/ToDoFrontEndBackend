import React from 'react';

import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import customRouter from './routing';
import './style.css';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App></App>
  // </React.StrictMode>
  <RouterProvider router={customRouter} />
    
);

