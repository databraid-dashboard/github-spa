import promise from 'redux-promise-middleware';
import {
  RENDER_ORGS, RENDER_REPOS, RENDER_LOGIN, RENDER_DASHBOARD,
} from '../actions/renderActions';

const renderPage = (state = { render: 'login', repoName: null, fetching: true, userName: 'michaelmurray6298', selectedOrgName: null  }, action) => {
  switch (action.type) {
    case RENDER_ORGS:
      return { ...state, render: 'orgs', session: {...action.payload.session.passport.user }, userName: 'michaelmurray6298' , fetching: false};

    case RENDER_REPOS:
      return { ...state, render: 'repos', session: {...action.payload.session.passport.user }, fetching: false, selectedOrgName: action.selectedOrgName};

    case RENDER_LOGIN:
      return { ...state, render: 'login' , session: {...action.payload.session.passport.user}, fetching: false};

    case RENDER_DASHBOARD:
      return { ...state, render: 'dashboard',
        repoName: action.repoName , session: {...action.payload.session.passport.user}, fetching: false, repoName: action.repoName,
        repoId: action.repoId };

    default:
      return state;
  }
};

export default renderPage;
