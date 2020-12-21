import React from 'react';
import ReactDOM from 'react-dom';
import favicons from './favicons';
import App from './App';
import './css/styles.css'; //Remove this (its only for demo, we will use SCSS instead here)
import './css/styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'));