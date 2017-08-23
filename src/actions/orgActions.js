import { GET_USERNAME } from '../actions/renderActions';
export const GET_ORGS = 'GET_ORGS';

export function retrieveOrgs(userName) {
  const queryString = `{orgs(userName: "${userName}") {orgs {id login url avatarUrl } } }`;
console.log(queryString);
  const request = { query: queryString };
  return (dispatch, getState, { Api }) => {
    if (getState().orgs.ids.length > 0) {
      return null;
    }
    return Api.fetchData(request)
      .then(response => {
        console.log(response);
        return response.data.orgs.orgs})
      .then((orgs) => {
        dispatch({
          type: GET_ORGS,
          responseObj: orgs,
        });
      });
  };
}
