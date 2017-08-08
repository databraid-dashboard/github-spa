<<<<<<< HEAD
/* eslint-disable max-len, no-unused-vars */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
/* eslint-disable max-len */

// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { rootReducer } from './reducers/index';
// import { initialState } from './reducers/initialState';
//
>>>>>>> 49a3039... combined efforts (#1)
// const logger = store => next => (action) => {
//   next(action);
// };
//
<<<<<<< HEAD
=======
=======
>>>>>>> dab0224... added loading feature, wrote tests
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

=======
>>>>>>> edbe0e0... fml
const logger = store => next => (action) => {
  next(action);
};

>>>>>>> d3454fd... Adding PR Table and Milestones Components
=======
>>>>>>> 49a3039... combined efforts (#1)
// const error = store => next => (action) => {
//   try {
//     next(action);
//   } catch (err) {
//     throw new Error(err);
//   }
//   next(action);
// };
<<<<<<< HEAD

const middleware = [
  thunk,
  // logger,
  // error,
];

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
<<<<<<< HEAD
  initialState,
  applyMiddleware(...middleware),
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(() => {
<<<<<<< HEAD
  console.log("State Change => ", store.getState());
})
=======
  console.log('state', store.getState());
});
>>>>>>> d1d9951... adding fixed dashboard view
=======
  compose(applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
store.subscribe(() => {
  console.log('state', store.getState());
});
>>>>>>> edbe0e0... fml
=======
// store.subscribe(() => {
//   store.getState();
// });
>>>>>>> 02a66ea... Adding with some linting errors addressed
=======
store.subscribe(() => {
  console.log(store.getState());
});
>>>>>>> b56b9a4... Adding conditional views
=======
>>>>>>> 79473f9... Fixed linting errors, installed redux-mock-store
export default store;
=======
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
>>>>>>> 49a3039... combined efforts (#1)
