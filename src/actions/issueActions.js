import issuesMock from '../SampleJSONResponses/IssuesJSON';

export const GET_ISSUES = 'GET_ISSUES';

export const retrieveIssues = () => {
  return dispatch => {
    dispatch({
      type: GET_ISSUES,
      responseObj: issuesMock
    })
  }
}
