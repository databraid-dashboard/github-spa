import {
  RENDER_ORGS, RENDER_REPOS, RENDER_LOGIN, RENDER_DASHBOARD,
} from '../actions/renderActions';

const renderPage = (state = { render: 'login', repoName: null, userName: 'michaelmurray6298', selectedOrgName: null }, action) => {
  switch (action.type) {
    case RENDER_ORGS:
      return { ...state, render: 'orgs', userName: 'michaelmurray6298' };

    case RENDER_REPOS:
      return { ...state, render: 'repos', selectedOrgName: action.selectedOrgName };

    case RENDER_LOGIN:
      return { ...state, render: 'login' };

    case RENDER_DASHBOARD:
      return { ...state,
        render: 'dashboard',
        repoName: action.repoName,
        repoId: action.repoId };

    default:
      return state;
  }
};

export default renderPage;
