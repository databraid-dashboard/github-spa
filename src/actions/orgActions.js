// import authorizedUserByOrgResponse from '../SampleJSONResponses/authORGsJSON';

export const GET_ORGS = 'GET_ORGS';


export function retrieveOrgs(userName) {

  let queryString = `{orgs(userName: ${userName}) {orgs {id login url avatarUrl } } }`

  let request = { query: queryString };

  return (dispatch, getState, { Api }) => {
    return Api.fetchData(request)
    .then(orgsObj => dispatch({
      type: GET_ORGS,
      responseObj: orgsObj
    }))
  }
}
