<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import reposByOrg from '../SampleJSONResponses/reposByORGmock';
=======
// import reposByOrg from '../SampleJSONResponses/reposByORGmock';
>>>>>>> e19f169... Adding syced app

<<<<<<< HEAD
<<<<<<< HEAD
export GET_REPOS = 'GET_REPOS';
=======
=======
// const request = { query: '{orgs(userName: "michaelmurray6298") {orgs {id login url avatarUrl } } }' };

>>>>>>> 979ef55... editing .gitignore
=======
>>>>>>> 8213532... Frontend/Backend sync
export const GET_REPOS = 'GET_REPOS';
>>>>>>> 2c48835... Adding repo view

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
export const retrieveRepos = () => (dispatch) => {
  dispatch({
    type: GET_REPOS,
    responseObj: reposByOrg,
  });
};
>>>>>>> 02a66ea... Adding with some linting errors addressed
=======
export function retrieveRepos(userName, orgName) {
  const queryString =
    `{repos (userName: "${userName}", orgName:"${orgName}") {repos {id name } } }`;

  const request = { query: queryString };

  return (dispatch, getState, { Api }) => Api.fetchData(request)
    .then(response => response.data.repos.repos)
    .then((repos) => {
      dispatch({
        type: GET_REPOS,
        responseObj: repos,
        orgName,
      });
    });
}
<<<<<<< HEAD
//  => (dispatch) => {
//   dispatch({
//     type: GET_REPOS,
//     responseObj: reposByOrg,
//   });
// };
>>>>>>> e19f169... Adding syced app
=======
>>>>>>> 8213532... Frontend/Backend sync
