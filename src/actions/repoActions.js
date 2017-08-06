<<<<<<< HEAD
<<<<<<< HEAD
import reposByOrg from '../SampleJSONResponses/reposByORGmock';

<<<<<<< HEAD
export GET_REPOS = 'GET_REPOS';
=======
export const GET_REPOS = 'GET_REPOS';
>>>>>>> 2c48835... Adding repo view

export const retrieveRepos = () => {
  return dispatch => {
    dispatch( {
      type: GET_REPOS,
<<<<<<< HEAD
      responseObj: //mock JSON data,
=======
      responseObj: reposByOrg,
>>>>>>> 2c48835... Adding repo view
    })
  }
}
=======
=======
>>>>>>> 8dc7899... removed MSTP's where uneeded, wrote test for components ready for pr, limited scoped of PR  via .gitignore dashboard feature
// import mock JSON data

// export GET_REPOS = 'GET_REPOS';
//
// export const retrieveRepos = () => {
//   return dispatch => {
//     dispatch( {
//       type: GET_REPOS,
//       responseObj: //mock JSON data,
//     })
//   }
// }
>>>>>>> edbe0e0... fml
