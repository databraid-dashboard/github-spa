

import { combineReducers } from 'redux';
<<<<<<< HEAD

import orgReducer from './orgReducer';

import issuesReducer from './issuesReducer';

import prReducer from './prReducer';
=======
// import { issuesReducer }from './issuesReducer';
import orgReducer from './orgReducer';
import issuesReducer from './issuesReducer';

export const repoReducer = combineReducers({
   issues: issuesReducer,

})
>>>>>>> mapped store, state, readme, mockAPI calls, and began wiring up components

import milestonesReducer from './milestonesReducer';

import repoReducer from './repoReducer';

<<<<<<< HEAD
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
export const rootReducer = combineReducers({
  // repos: repoReducer,
  orgs: orgReducer,
  // users: userReducer,
  // pullRequests : prReducer,
  // milestones: msReducer,
})
>>>>>>> mapped store, state, readme, mockAPI calls, and began wiring up components
