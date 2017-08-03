//

export RENDER_ORGS= 'RENDER_ORGS';
export RENDER_LOGIN='RENDER_LOGIN';
export RENDER_REPOS='RENDER_REPOS';
export RENDER_DASHBOARD='RENDER_DASHBOARD';

export const renderOrgs = () => {
  return dispatch => {
    dispatch({
      type: RENDER_ORGS,
      responseStr:'orgs'
    })
  }
}

export const renderLogin = () => {
  return dispatch => {
    dispatch({
      type: RENDER_LOGIN,
      responseStr:'login'
    })
  }
}

export const renderRepos = () => {
  return dispatch => {
    dispatch({
      type: RENDER_REPOS,
      responseStr:'repos'
    })
  }
}

export const renderDashboard = () => {
  return dispatch => {
    dispatch({
      type: RENDER_DASHBOARD,
      reponseStr:'dashboard'
    })
  }
}
