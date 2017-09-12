const AUTH_ROUTE = 'http://localhost:8000/isAuthenticated';
export const RENDER_ORGS = 'RENDER_ORGS';
export const RENDER_LOGIN = 'RENDER_LOGIN';
export const RENDER_REPOS = 'RENDER_REPOS';
export const RENDER_ORGS_FULLFILLED = 'RENDER_ORGS_FULLFILLED';
export const RENDER_ORGS_PENDING = 'RENDER_ORGS_PENDING';
export const RENDER_ORGS_REJECTED = 'RENDER_ORGS_REJECTED';
export const RENDER_DASHBOARD = 'RENDER_DASHBOARD';

export const fetchOrgs = userName => (dispatch) => {
  dispatch({
    type: RENDER_ORGS,
    userName,
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
  });
};

export const renderRepos = selectedOrgName => (dispatch) => {
  dispatch({
    type: RENDER_REPOS,
    selectedOrgName,
  });
};

export const renderDashboard = repoName => (dispatch) => {
  dispatch({
    type: RENDER_DASHBOARD,
    repoName,
  });
};
