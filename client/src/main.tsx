import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from "@material-tailwind/react";


import App from './App.tsx';
import { store } from './store/index.js';
import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)