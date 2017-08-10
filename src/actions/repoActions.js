<<<<<<< HEAD
// import reposByOrg from '../SampleJSONResponses/reposByORGmock';

=======
>>>>>>> Frontend/Backend sync
export const GET_REPOS = 'GET_REPOS';

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
