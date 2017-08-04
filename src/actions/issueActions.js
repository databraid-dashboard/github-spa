import issuesMock from '../SampleJSONResponses/IssuesJSON';

export const GET_ISSUES = 'GET_ISSUES';
export const LOADING_ISSUES = 'LOADING_ISSUES';
export const retrieveIssues = () => (dispatch) => {
  dispatch({
    type: LOADING_ISSUES,
  });

  dispatch({
    type: GET_ISSUES,
    responseObj: issuesMock,
  });
};
