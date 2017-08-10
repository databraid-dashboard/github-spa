// import reposByOrg from '../SampleJSONResponses/reposByORGmock';

// const request = { query: '{orgs(userName: "michaelmurray6298") {orgs {id login url avatarUrl } } }' };

export const GET_REPOS = 'GET_REPOS';

export function retrieveRepos(userName, orgName) {

  let queryString = `{repos (userName: "${userName}", orgName:"${orgName}") {repos {id name } } }`

  let request = { query: queryString };

  return (dispatch, getState, { Api }) => {
    return Api.fetchData(request)
    .then(response => response.data.repos.repos)
    .then(repos => {
      dispatch({
      type: GET_REPOS,
      responseObj: repos,
      orgName: orgName
      })
    })
  }
}
//  => (dispatch) => {
//   dispatch({
//     type: GET_REPOS,
//     responseObj: reposByOrg,
//   });
// };
