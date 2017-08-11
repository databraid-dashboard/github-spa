
import {
  RENDER_ORGS, RENDER_REPOS, RENDER_LOGIN, RENDER_ORGS_FULLFILLED, RENDER_ORGS_PENDING, RENDER_ORGS_REJECTED, RENDER_DASHBOARD,
} from '../actions/renderActions';

const renderPage = (state = { render: 'login', repoName: null, fetching: true, userName: '', selectedOrgName: null, session: {} }, action) => {
  switch (action.type) {
    case RENDER_ORGS_FULLFILLED:
    console.log('username in RENDER_ORGS_FULLFILLED reducer', action.payload);
      return { ...state, render: 'orgs',  userName: action.payload.session.passport.user._json.login , fetching: false};
    case RENDER_ORGS_PENDING:
      return { ...state, fetching: true};
    case RENDER_ORGS_REJECTED:
      return { ...state, };  // NOTE handle error flow

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
