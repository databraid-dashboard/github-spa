export const RENDER_ORGS = 'RENDER_ORGS';
export const RENDER_LOGIN = 'RENDER_LOGIN';
export const RENDER_REPOS = 'RENDER_REPOS';
export const RENDER_DASHBOARD = 'RENDER_DASHBOARD';

export const fetchOrgs = userName => (dispatch) => {
  dispatch({
    type: RENDER_ORGS,
    responseStr: 'orgs',
    userName,
  });
};

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
