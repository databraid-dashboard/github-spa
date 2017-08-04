import authorizedUserByOrgResponse from '../SampleJSONResponses/authJSON';

export const GET_ORGS = 'GET_ORGS';

<<<<<<< HEAD
export const retrieveOrgs = () => {
  return dispatch => {
    dispatch( {
      type : GET_ORGS,
      responseObj: authorizedUserByOrgResponse,
    })
  }
}
=======
export const retrieveOrgs = () => (dispatch) => {
  dispatch({
    type: GET_ORGS,
    responseObj: authorizedUserByOrgResponse,
  });
};
>>>>>>> edbe0e0... fml
