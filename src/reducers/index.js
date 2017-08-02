
import { combineReducers } from 'redux';
// import { issuesReducer }from './issuesReducer';
import orgReducer from './orgReducer';
import issuesReducer from './issuesReducer';

export const repoReducer = combineReducers({
   issues: issuesReducer,

})



export const rootReducer = combineReducers({
  // repos: repoReducer,
  orgs: orgReducer,
  // users: userReducer,
  // pullRequests : prReducer,
  // milestones: msReducer,
})
