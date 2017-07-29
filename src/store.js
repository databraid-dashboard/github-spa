<<<<<<< HEAD
/* eslint-disable max-len, no-unused-vars */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index';

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
  thunk,
  // thunkMiddleware.withExtraArgument({ Api }),
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

=======
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/index';
import { initialState } from './reducers/initialState';

const logger = store => next => (action) => {
  console.log(`${action.type} action fired`);
  next(action);
};

const error = store => next => (action) => {
  try {
    next(action);
  } catch (err) {
    console.log('Error MESSAGE:', err);
  }
  next(action);
};

const middleware = [
  thunk,
  logger,
  error,
];
/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware),
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(() => {
  console.log('SUBSCRIBER store changed', store.getState());
});

>>>>>>> Must push scaffold to teamMates, My linting errors are related to smart component use are superfluous, and i've run out of time.
export default store;
