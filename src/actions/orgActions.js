export const GET_ORGS = 'GET_ORGS';

export function retrieveOrgs(userName) {

  let queryString = `{orgs(userName: "${userName}") {orgs {id login url avatarUrl } } }`

  let request = { query: queryString };

  return (dispatch, getState, { Api }) => {
    return Api.fetchData(request)
    .then(response => response.data.orgs.orgs)
    .then(orgs => {
      dispatch({
      type: GET_ORGS,
      responseObj: orgs
      })
    })
  }
}
