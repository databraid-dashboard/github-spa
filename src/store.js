/* eslint-disable max-len */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/index';

const logger = store => next => (action) => {
  console.log('action fired', action);
  next(action);
};

// const error = store => next => (action) => {
//   try {
//     next(action);
//   } catch (err) {
//     throw new Error(err);
//   }
//   next(action);
// };

const middleware = [
  thunk,
  logger,
  // error,
];

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

store.subscribe(() => {
  store.getState();
});
export default store;
