import authorizedUserByOrgResponse from '../SampleJSONResponses/authORGsJSON';

export const GET_ORGS = 'GET_ORGS';

export const retrieveOrgs = () => (dispatch) => {
  dispatch({
    type: GET_ORGS,
    responseObj: authorizedUserByOrgResponse,
  });
};
