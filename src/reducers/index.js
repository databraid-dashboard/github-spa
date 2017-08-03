
import { combineReducers } from 'redux';
// import { issuesReducer }from './issuesReducer';
import orgReducer from './orgReducer';

import issuesReducer from './issuesReducer';

import prReducer from './prReducer';

import milestonesReducer from './milestonesReducer'

export const rootReducer = combineReducers({
  issues: issuesReducer,
  pullRequests : prReducer,
  milestones: milestonesReducer,
  // repos: repoReducer,
  orgs: orgReducer,
  // users: userReducer,

  // milestones: msReducer,
})
