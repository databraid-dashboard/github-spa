<<<<<<< HEAD
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

=======
export const GET_ORGS = 'GET_ORGS';

>>>>>>> e342caa... Adding latest work
export function retrieveOrgs(userName) {
  const queryString = `{orgs(userName: "${userName}") {orgs {id login url avatarUrl } } }`;

  const request = { query: queryString };

  return (dispatch, getState, { Api }) => {
    if (getState().orgs.ids.length > 0) {
      return null;
    }
    return Api.fetchData(request)
      .then(response => response.data.orgs.orgs)
      .then((orgs) => {
        dispatch({
          type: GET_ORGS,
          responseObj: orgs,
        });
      });
  };
}
>>>>>>> 4bf6324... Adding some api calls
