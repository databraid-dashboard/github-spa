/* eslint-disable max-len, no-unused-vars */
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers/index';
import GITHUB_API from './utils/Api';
 /* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware.withExtraArgument({ GITHUB_API })),

);
 /* eslint-enable */
export default store;
