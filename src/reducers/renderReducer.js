
import {
  RENDER_REPOS, RENDER_LOGIN, RENDER_DASHBOARD, GET_USERNAME,
} from '../actions/renderActions';

const renderPage = (state = { render: 'login', repoName: null, fetching: true, userName: '', selectedOrgName: null, session: {} }, action) => {
  switch (action.type) {
    case GET_USERNAME:
      return { ...state, userName: action.userName, render: 'orgs' };
    case RENDER_REPOS:
      return { ...state, render: 'repos', fetching: false, selectedOrgName: action.selectedOrgName };

    case RENDER_LOGIN:
      return { ...state, render: 'login', fetching: false };

    case RENDER_DASHBOARD:
      return { ...state,
        render: 'dashboard',
        fetching: false,
        repoName: action.repoName,
        repoId: action.repoId };

    default:
      return state;
  }
};

export default renderPage;
