export const RENDER_LOGIN = 'RENDER_LOGIN';
export const RENDER_REPOS = 'RENDER_REPOS';
export const RENDER_DASHBOARD = 'RENDER_DASHBOARD';
export const GET_USERNAME = 'GET_USERNAME';

<<<<<<< HEAD
export const renderOrgs = () => (dispatch) => {
  dispatch({
    type: RENDER_ORGS,
    responseStr: 'orgs',
<<<<<<< HEAD
<<<<<<< HEAD
    fetching : true,
    payload: fetch(AUTH_ROUTE)
      .then(response => {
        dispatch
      })
=======
    userName,
>>>>>>> 4bf6324... Adding some api calls
=======
    payload: fetch(AUTH_ROUTE)
      .then(response => console.log('first response', response) )
      // .then(response => {
      //   console.log('here!!!!!!');
      //   console.log(response);
      //   dispatch({type: RENDER_ORGS_FULLFILLED, payload: response.session})
      // })
>>>>>>> 18ae6cd... Played with render action, reducer login component and store, all..day...
  });
};

// export const renderOrgs = () => {
//   return {
//     type: RENDER_ORGS,
//     responseStr: 'orgs',
//     fetching : true,
//     payload: fetch(AUTH_ROUTE)
//       .then(response => {
//         dispatch
//       })
//   };
// };

=======
export const renderOrgs = (userName) => (dispatch) => {
  return dispatch({
    type: GET_USERNAME,
    userName,
  })
}
>>>>>>> 4b55b56... Fixed merge conflict iwth Oauth feature, need to ipull down latest
export const renderLogin = () => (dispatch) => {
  dispatch({
    type: RENDER_LOGIN,
    responseStr: 'login',
  });
};

export const renderRepos = selectedOrgName => (dispatch) => {
  dispatch({
    type: RENDER_REPOS,
    responseStr: 'repos',
    selectedOrgName,
  });
};

export const renderDashboard = repoName => (dispatch) => {
  dispatch({
    type: RENDER_DASHBOARD,
    reponseStr: 'dashboard',
    repoName,
  });
};
