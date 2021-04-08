import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { AppRouter } from './router';
import "../src/main.scss";

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

