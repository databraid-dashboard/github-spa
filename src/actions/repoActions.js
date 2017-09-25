export const GET_REPOS = 'GET_REPOS';

export function retrieveRepos(userName, orgName) {
  const queryString = `{repos (userName: "${userName}", orgName:"${orgName}") {repos {id name } } }`;

  const request = { query: queryString };

  return (dispatch, getState, { GITHUB_API }) =>
    GITHUB_API.fetchData(request).then(response => response.data.repos.repos).then((repos) => {
      dispatch({
        type: GET_REPOS,
        responseObj: repos,
        orgName,
      });
    });
}
