import authorizedUserByOrgResponse from '../SampleJSONResponses/authORGsJSON';

export const GET_ORGS = 'GET_ORGS';

const request = { query: '{orgs(userName: "michaelmurray6298") {orgs {id login url avatarUrl } } }' };

export function retrieveOrgs() {
  return (dispatch, getState, { Api }) => {
    return Api.fetchData()
    .then(orgsObj => dispatch({
      type: GET_ORGS,
      responseObj: orgsObj
    }))
  }
}
