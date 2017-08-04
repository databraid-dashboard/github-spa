
import { combineReducers } from 'redux';

import orgReducer from './orgReducer';

import issuesReducer from './issuesReducer';

import prReducer from './prReducer';

import milestonesReducer from './milestonesReducer';

import repoReducer from './repoReducer';

export const rootReducer = combineReducers({
  issues: issuesReducer,
  pullRequests: prReducer,
  milestones: milestonesReducer,
  repos: repoReducer,
  orgs: orgReducer,
  // users: userReducer,

  // milestones: msReducer,
});
