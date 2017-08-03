/* eslint-disable max-len */

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

>>>>>>> d3454fd... Adding PR Table and Milestones Components
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
