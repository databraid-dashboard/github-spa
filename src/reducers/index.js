


import { combineReducers } from 'redux';

import orgReducer from './orgReducer';

import issuesReducer from './issuesReducer';

import prReducer from './prReducer';

import milestonesReducer from './milestonesReducer';

import repoReducer from './repoReducer';

<<<<<<< HEAD
import renderPage from './renderReducer';

const rootReducer = combineReducers({
=======
// import renderPage from './renderReducer';

export const rootReducer = combineReducers({
>>>>>>> Adding working orgs page
  issues: issuesReducer,
  pullRequests: prReducer,
  milestones: milestonesReducer,
  repos: repoReducer,
  orgs: orgReducer,
<<<<<<< HEAD
  currentPage: renderPage,
  // users: userReducer,
});

export default rootReducer;
  // repos: repoReducer,

  // users: userReducer,

  // milestones: msReducer,
})
=======
  // currentPage: renderPage,
  // users: userReducer,
});
>>>>>>> Adding working orgs page
