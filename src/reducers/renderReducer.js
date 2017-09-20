
import { LOGOUT, RENDER_ORGS, RENDER_REPOS, RENDER_LOGIN, RENDER_DASHBOARD,
} from '../actions/renderActions';

const initialState = {
  render: 'login',
  repoName: null,
  userName: '',
  selectedOrgName: null,
}

const renderPage = (state = initialState, action) => {
  switch (action.type) {
    case RENDER_ORGS:
      return { ...state, render: 'orgs', userName: action.userName };

    case RENDER_REPOS:
      return { ...state, render: 'repos', fetching: false, selectedOrgName: action.selectedOrgName };

    case RENDER_LOGIN:
      return initialState;

    case RENDER_DASHBOARD:
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
