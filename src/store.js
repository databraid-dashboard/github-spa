/* eslint-disable max-len, no-unused-vars */
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers/index';
import GITHUB_API from './utils/Api';


 /* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware.withExtraArgument({ GITHUB_API })),

);
store.subscribe(() => {
  console.log('SUBSCRIBER store changed', store.getState());
});
 /* eslint-enable */
export default store;
