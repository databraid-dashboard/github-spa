// import prMock from '../SampleJSONResponses/PRmock';

export const GET_PRS = 'GET_PRS';
export const LOADING_PRS = 'LOADING_PRS';

export function retrievePrs(userName, orgName, repoName){

  let queryString = `{repos (userName: "${userName}", orgName:"${orgName}", repoName:"${repoName}") {repos {pullRequests {id title submittedBy createdAt mergeable } } } }`

  let request = { query: queryString };

  return (dispatch, getState, { Api }) => {
    return Api.fetchData(request)
    .then(response => response.data.repos.repos[0].pullRequests)
    .then(pullRequests => {
      dispatch({
        type: GET_PRS,
        responseObj: pullRequests,
        repoName: repoName
      })
    })
  }
}
