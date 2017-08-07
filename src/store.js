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
// const logger = store => next => (action) => {
//   next(action);
// };
//
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
export default store;
