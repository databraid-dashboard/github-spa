<<<<<<< HEAD
/* eslint-disable max-len, no-unused-vars */
<<<<<<< HEAD

<<<<<<< HEAD
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
=======
=======
import promise from 'redux-promise-middleware';
>>>>>>> b8942b0... exploring Oauth hookup not finished, will need to accept sandeep's next update to sync
import { createStore, applyMiddleware, compose } from 'redux';
<<<<<<< HEAD
import thunk from 'redux-thunk';
// import thunkMiddleware from 'redux-thunk';
>>>>>>> 18b5958... Updating store
=======
// import thunk from 'redux-thunk';
import thunkMiddleware from 'redux-thunk';
>>>>>>> 4bf6324... Adding some api calls
import rootReducer from './reducers/index';
import Api from './utils/Api'


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
<<<<<<< HEAD
  promise();
  thunk,
<<<<<<< HEAD
<<<<<<< HEAD
  // logger,
=======
  // thunkMiddleware.withExtraArgument({ Api }),
=======
  // thunk,
  thunkMiddleware.withExtraArgument({ Api }),
>>>>>>> 4bf6324... Adding some api calls
  logger,
>>>>>>> 813da6e... updated store
  // error,
=======
>>>>>>> b8942b0... exploring Oauth hookup not finished, will need to accept sandeep's next update to sync
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
