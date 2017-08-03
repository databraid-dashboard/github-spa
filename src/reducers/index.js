
import { combineReducers } from 'redux';
// import { issuesReducer }from './issuesReducer';
import orgReducer from './orgReducer';
import issuesReducer from './issuesReducer';

<<<<<<< HEAD
export const repoReducer = combineReducers({
   issues: issuesReducer,
  // pullRequests : prReducer,
  // milestones: msReducer,
})



export const rootReducer = combineReducers({
=======
import prReducer from './prReducer';

import milestonesReducer from './milestonesReducer'

export const rootReducer = combineReducers({
  issues: issuesReducer,
  pullRequests : prReducer,
  milestones: milestonesReducer,
>>>>>>> d3454fd... Adding PR Table and Milestones Components
  // repos: repoReducer,
  orgs: orgReducer,
  // users: userReducer,
})
