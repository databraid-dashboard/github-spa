
import { combineReducers } from 'redux';
<<<<<<< HEAD
=======

import orgReducer from './orgReducer';
>>>>>>> edbe0e0... fml

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
<<<<<<< HEAD

<<<<<<< HEAD
// import renderPage from './renderReducer';
=======
>>>>>>> edbe0e0... fml
=======
import renderPage from './renderReducer';
>>>>>>> b56b9a4... Adding conditional views

const rootReducer = combineReducers({
  issues: issuesReducer,
  pullRequests: prReducer,
  milestones: milestonesReducer,
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d3454fd... Adding PR Table and Milestones Components
  // repos: repoReducer,
=======
  repos: repoReducer,
>>>>>>> 9486a99... Adding components re-organized
=======
  repos: repoReducer,
>>>>>>> edbe0e0... fml
  orgs: orgReducer,
  currentPage: renderPage,
  // users: userReducer,
<<<<<<< HEAD

  // milestones: msReducer,
<<<<<<< HEAD
})
=======
});
>>>>>>> df38d77... Adding working orgs page
=======
});
<<<<<<< HEAD
>>>>>>> edbe0e0... fml
=======

export default rootReducer;
>>>>>>> 02a66ea... Adding with some linting errors addressed
