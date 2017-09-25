
import { DISPLAY_ORGS, DISPLAY_REPOS, DISPLAY_LOGIN, DISPLAY_DASHBOARD, LOGOUT,
} from '../actions/renderActions';

const initialState = {
  render: 'login',
  repoName: null,
  userName: '',
  selectedOrgName: null,
};

const renderPage = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_ORGS:
      return { ...state, render: 'orgs', userName: action.userName };

    case DISPLAY_REPOS:
      return { ...state, render: 'repos', fetching: false, selectedOrgName: action.selectedOrgName };

    case DISPLAY_LOGIN:
      return initialState;

    case DISPLAY_DASHBOARD:
      return { ...state,
        render: 'dashboard',
        repoName: action.repoName,
        fetching: false,
        repoId: action.repoId };

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
};

export default renderPage;
