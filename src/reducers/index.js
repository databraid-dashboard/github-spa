
import { combineReducers } from 'redux';

import orgReducer from './orgReducer';
import issuesReducer from './issuesReducer';

<<<<<<< HEAD
export const repoReducer = combineReducers({
   issues: issuesReducer,

})



export const rootReducer = combineReducers({
=======
import prReducer from './prReducer';

import milestonesReducer from './milestonesReducer';

import repoReducer from './repoReducer';

// import renderPage from './renderReducer';

export const rootReducer = combineReducers({
  issues: issuesReducer,
  pullRequests : prReducer,
  milestones: milestonesReducer,
<<<<<<< HEAD
>>>>>>> d3454fd... Adding PR Table and Milestones Components
  // repos: repoReducer,
=======
  repos: repoReducer,
>>>>>>> 9486a99... Adding components re-organized
  orgs: orgReducer,
  // currentPage: renderPage,
  // users: userReducer,
<<<<<<< HEAD

  // milestones: msReducer,
})
=======
});
>>>>>>> df38d77... Adding working orgs page
