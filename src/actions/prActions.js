export const GET_PRS = 'GET_PRS';
export const LOADING_PRS = 'LOADING_PRS';

export function retrievePrs(userName, orgName, repoName) {
  const queryString = `
    {
      repos
      (userName: "${userName}",
      orgName:"${orgName}",
      repoName:"${repoName}") {
        repos {
          pullRequests {
            id
            title
            submittedBy
            createdAt
            mergeable
          }
        }
      }
    }
    `;

  const request = { query: queryString };

  return (dispatch, getState, { GITHUB_API }) =>
    GITHUB_API.fetchData(request)
      .then(response => response.data.repos.repos[0].pullRequests)
      .then((pullRequests) => {
        dispatch({
          type: GET_PRS,
          responseObj: pullRequests,
          repoName,
        });
      });
}
