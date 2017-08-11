/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { github as rootReducer } from './reducers/index';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import GITHUB_API from './utils/Api';

// ReactDOM.render(
//   React.createElement(Provider, { store }, React.createElement(App)), document.getElementById('root'));

/* eslint-disable react/jsx-filename-extension */

ReactDOM.render(
  <Provider store={store}>
    <App widgetId={'github'} />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();

export default App;
export { rootReducer, GITHUB_API };
