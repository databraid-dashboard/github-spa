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

export default store;
=======
/* eslint-disable max-len */

// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { rootReducer } from './reducers/index';
// import { initialState } from './reducers/initialState';
//
// const logger = store => next => (action) => {
//   next(action);
// };
//
// const error = store => next => (action) => {
//   try {
//     next(action);
//   } catch (err) {
//     throw new Error(err);
//   }
//   next(action);
// };
//
// const middleware = [
//   thunk,
//   logger,
//   error,
// ];
//
// /* eslint-disable no-underscore-dangle */
// const store = createStore(
//   rootReducer,
//   initialState,
//   applyMiddleware(...middleware),
//   typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );
//
//
// export default store;
=======
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/index';

<<<<<<< HEAD
const initialState = {
  users : {
    ids: [],
    usersByID: {}
  },
  orgs: {
    ids: [],
    orgsByID: {},
  },
  repos : {
    ids: [],
    reposById: {},
    pullRequests: {},
    milestones :{},
    }
  };
// const logger = store => next => (action) => {
//   next(action);
// };
//
=======
// const initialState = {
//   users : {
//     ids: [],
//     usersByID: {}
//   },
//   orgs: {
//     ids: [],
//     orgsByID: {},
//   },
//   repos : {
//     ids: [],
//     reposById: {},
//     pullRequests: {},
//     milestones :{},
//     }
//   };

const logger = store => next => (action) => {
  console.log('action fired', action);
  next(action);
};

>>>>>>> added loading feature, wrote tests
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
  // logger,
  // error,
];

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware),
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(() => {
  console.log("State Change => ", store.getState());
})
export default store;
>>>>>>> Begun component hookup, initial State, and related reducers
