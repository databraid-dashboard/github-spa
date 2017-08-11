const AUTH_ROUTE = 'http://localhost:8000/isAuthenticated';
export const RENDER_ORGS = 'RENDER_ORGS';
export const RENDER_LOGIN = 'RENDER_LOGIN';
export const RENDER_REPOS = 'RENDER_REPOS';
export const RENDER_ORGS_FULLFILLED = 'RENDER_ORGS_FULLFILLED';
export const RENDER_ORGS_PENDING = 'RENDER_ORGS_PENDING';
export const RENDER_ORGS_REJECTED = 'RENDER_ORGS_REJECTED';
export const RENDER_DASHBOARD = 'RENDER_DASHBOARD';

export const renderOrgs = () => (dispatch) => {
  dispatch({
    type: RENDER_ORGS,
    responseStr: 'orgs',
    payload: fetch(AUTH_ROUTE)
      .then(response => console.log('first response', response) )
      // .then(response => {
      //   console.log('here!!!!!!');
      //   console.log(response);
      //   dispatch({type: RENDER_ORGS_FULLFILLED, payload: response.session})
      // })
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
