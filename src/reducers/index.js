
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
import { repoReducer } from './repoReducer';

export const rootReducer = combineReducers({
  pullRequests: repoReducer,

});
>>>>>>> Must push scaffold to teamMates, My linting errors are related to smart component use are superfluous, and i've run out of time.
