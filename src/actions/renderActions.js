export const RENDER_LOGIN = 'RENDER_LOGIN';
export const RENDER_REPOS = 'RENDER_REPOS';
export const RENDER_DASHBOARD = 'RENDER_DASHBOARD';
export const GET_USERNAME = 'GET_USERNAME';
// const AUTH_ROUTE = 'http://localhost:8000/isAuthenticated';

export const renderOrgs = userName => dispatch => dispatch({
  type: GET_USERNAME,
  userName,
});
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
