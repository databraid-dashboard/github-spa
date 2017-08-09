<<<<<<< HEAD
import authorizedUserByOrgResponse from '../SampleJSONResponses/authJSON';

export const GET_ORGS = 'GET_ORGS';

<<<<<<< HEAD
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
=======
const request = { query: '{orgs(userName: "michaelmurray6298") {orgs {id login url avatarUrl } } }' };
=======
// import authorizedUserByOrgResponse from '../SampleJSONResponses/authORGsJSON';

export const GET_ORGS = 'GET_ORGS';

>>>>>>> 979ef55... editing .gitignore

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
>>>>>>> 4bf6324... Adding some api calls
