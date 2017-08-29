export const GET_MILESTONES = 'GET_MILESTONES';
export const LOADING_MILESTONES = 'LOADING_MILESTONES';

export function retrieveMilestones(userName, orgName, repoName) {
  const queryString = `
    {
      repos (
        userName: "${userName}",
        orgName:"${orgName}",
        repoName:"${repoName}"){
          repos {
            milestones {
              id
              title
              openIssues
              closedIssues
              dueOn
            }
          }
        }
      }
      `;

  const request = { query: queryString };

  return (dispatch, getState, { GITHUB_API }) =>
    GITHUB_API.fetchData(request)
      .then(response => response.data.repos.repos[0].milestones)
      .then((milestones) => {
        dispatch({
          type: GET_MILESTONES,
          responseObj: milestones,
          repoName,
        });
      });
}
