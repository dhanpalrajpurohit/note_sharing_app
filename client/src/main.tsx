import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.tsx';
import { store } from './store/store.js';
import { Provider } from 'react-redux';

import './index.css'

import { ThemeProvider } from "@material-tailwind/react";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)