import {
<<<<<<< HEAD
  RENDER_ORGS, RENDER_REPOS, RENDER_LOGIN, RENDER_DASHBOARD,
} from '../actions/renderActions';

<<<<<<< HEAD
const renderPage = (state = { render: 'login', repoName: null }, action) => {
=======
export const renderPage = (state = '', action) => {
>>>>>>> Adding working orgs page
  switch (action.type) {
    case RENDER_ORGS:
      return { ...state, render: 'orgs' };

    case RENDER_REPOS:
      return { ...state, render: 'repos' };

    case RENDER_LOGIN:
      return { ...state, render: 'login' };

    case RENDER_DASHBOARD:
      return { render: 'dashboard',
        repoName: action.repoName };

    default:
      return state;
  }
};

export default renderPage;
=======
  RENDER_ORGS, RENDER_REPOS, RENDER_LOGIN, RENDER_DASHBOARD
} from '../actions/renderActions';

const renderPage = (state = '', action) => {
  switch(action.type) {
    case RENDER_ORGS:
      return state='orgs';

    case RENDER_REPOS:
      return state='repos';

    case RENDER_LOGIN:
      return state='login';

    case RENDER_DASHBOARD:
      return state='dashboard';
  }
}
>>>>>>> Adding components re-organized
