import {
  RENDER_ORGS, RENDER_REPOS, RENDER_LOGIN, RENDER_DASHBOARD,
} from '../actions/renderActions';

const renderPage = (state = {render: 'orgs', repoName:null }, action) => {
  switch (action.type) {
    case RENDER_ORGS:
      return {...state, render: 'orgs'};

    case RENDER_REPOS:
      return {...state, render: 'repos'};

    case RENDER_LOGIN:
      return {...state, render: 'login'};

    case RENDER_DASHBOARD:
      return {render: 'dashboard',
              repoName: action.repoName}

    default:
      return state
  }
};

export default renderPage
