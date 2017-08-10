<<<<<<< HEAD
import authorizedUserByOrgResponse from '../SampleJSONResponses/authORGsJSON';

export const GET_ORGS = 'GET_ORGS';

const request = { query: '{orgs(userName: "michaelmurray6298") {orgs {id login url avatarUrl } } }' };
=======
export const GET_ORGS = 'GET_ORGS';

export function retrieveOrgs(userName) {
  const queryString = `{orgs(userName: "${userName}") {orgs {id login url avatarUrl } } }`;

  const request = { query: queryString };
>>>>>>> Frontend/Backend sync

export function retrieveOrgs() {
  return (dispatch, getState, { Api }) => {
<<<<<<< HEAD
    return Api.fetchData()
    .then(orgsObj => dispatch({
      type: GET_ORGS,
      responseObj: orgsObj
    }))
  }
=======
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
>>>>>>> Frontend/Backend sync
}
