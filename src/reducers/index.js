<<<<<<< HEAD

import { combineReducers } from 'redux';
<<<<<<< HEAD

import orgReducer from './orgReducer';

import issuesReducer from './issuesReducer';

import prReducer from './prReducer';

import milestonesReducer from './milestonesReducer';

import repoReducer from './repoReducer';

import renderPage from './renderReducer';

const rootReducer = combineReducers({
  issues: issuesReducer,
  pullRequests: prReducer,
  milestones: milestonesReducer,
  repos: repoReducer,
  orgs: orgReducer,
  currentPage: renderPage,
  // users: userReducer,
});

export default rootReducer;
=======
//
// import { combineReducers } from 'redux';
// import { repoReducer } from './repoReducer';
//
// export default const rootReducer = combineReducers({
//   pullRequests: repoReducer,
// });
>>>>>>> created test, removed / disabled es-lint rules, scaffolded file structure
=======
//
// import { combineReducers } from 'redux';
// import { repoReducer } from './repoReducer';

// export default const rootReducer = combineReducers({
//   pullRequests: repoReducer,
// });
>>>>>>> Adding card component to Issues list
