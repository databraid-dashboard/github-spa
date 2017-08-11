export const GET_ORGS = 'GET_ORGS';

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
