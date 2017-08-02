
import { combineReducers } from 'redux';
// import { issuesReducer }from './issuesReducer';
import orgReducer from './orgReducer';

import issuesReducer from './issuesReducer';

export const rootReducer = combineReducers({
  issues: issuesReducer,
  // pullRequests : prReducer,
  // milestones: msReducer,
  // repos: repoReducer,
  orgs: orgReducer,
  // users: userReducer,
})
