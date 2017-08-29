/* eslint-disable max-len, no-unused-vars */
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index';
import GITHUB_API from './utils/Api';

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware.withExtraArgument({ GITHUB_API })),
);

// const error = store => next => (action) => {
//   try {
//     next(action);
//   } catch (err) {
//     throw new Error(err);
//   }
//   next(action);
// };

// const middleware = [
//   // thunk,
//   thunkMiddleware.withExtraArgument({ GITHUB_API }),
//   logger,
//   // error,
// ];
//

/* eslint-disable no-underscore-dangle */
// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(...middleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   ),
// );

export default store;
