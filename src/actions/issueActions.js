import IssuesJSON from '../SampleJSONResponses/IssuesJSON';

export const GET_ISSUES = 'GET_ISSUES';
export const LOADING_ISSUES = 'LOADING_ISSUES';
<<<<<<< HEAD
export const retrieveIssues = () => {
  return dispatch => {
    dispatch({
      type: LOADING_ISSUES
    })
    
    dispatch({
      type: GET_ISSUES,
      responseObj: IssuesJSON
    })
  }
}
=======
export const retrieveIssues = () => (dispatch) => {
  dispatch({
    type: LOADING_ISSUES,
  });

  dispatch({
    type: GET_ISSUES,
    responseObj: issuesMock,
  });
};
>>>>>>> edbe0e0... fml
