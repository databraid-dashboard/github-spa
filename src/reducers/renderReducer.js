import {
  RENDER_ORGS, RENDER_REPOS, RENDER_LOGIN, RENDER_DASHBOARD,
} from '../actions/renderActions';

const renderPage = (state = { render: 'login', repoName: null, userName: '', selectedOrgName: null }, action) => {
  switch (action.type) {
    case RENDER_ORGS:
      return { ...state, render: 'orgs', userName: action.userName };

    case RENDER_REPOS:
      return { ...state, render: 'repos', selectedOrgName: action.selectedOrgName };

    case RENDER_LOGIN:
      return { ...state, render: 'login' };

    case RENDER_DASHBOARD:
      return { ...state,
        render: 'dashboard',
        repoName: action.repoName };

    default:
      return state;
  }
};

export default renderPage;
