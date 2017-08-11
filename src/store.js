/* eslint-disable max-len, no-unused-vars */
import promiseMiddleware from 'redux-promise-middleware';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index';
import Api from './utils/Api';

const logger = store => next => (action) => {
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
  promiseMiddleware(),
  thunkMiddleware.withExtraArgument({ Api}),
  thunk,
];

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
