// index.js

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store'; // Import your Redux store
import App from './App'; // Import your root component

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>

        <App />

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

