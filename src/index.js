/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

ReactDOM.render(
  React.createElement(Provider, { store }, React.createElement(App)), document.getElementById('root'));
<<<<<<< HEAD

>>>>>>> mapped store, state, readme, mockAPI calls, and began wiring up components
registerServiceWorker();
