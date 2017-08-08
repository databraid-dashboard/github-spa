export const RENDER_ORGS = 'RENDER_ORGS';
export const RENDER_LOGIN = 'RENDER_LOGIN';
export const RENDER_REPOS = 'RENDER_REPOS';
export const RENDER_DASHBOARD = 'RENDER_DASHBOARD';

export const renderOrgs = () => (dispatch) => {
  dispatch({
    type: RENDER_ORGS,
    responseStr: 'orgs',
  });
};

export const renderLogin = () => (dispatch) => {
  dispatch({
    type: RENDER_LOGIN,
    responseStr: 'login',
  });
};

export const renderRepos = () => (dispatch) => {
  dispatch({
    type: RENDER_REPOS,
    responseStr: 'repos',
  });
};

export const renderDashboard = (repoName) => {
  return dispatch => {
    dispatch({
      type: RENDER_DASHBOARD,
      reponseStr:'dashboard',
      repoName: repoName
    })
  }
}
