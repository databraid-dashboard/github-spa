import { combineReducers } from 'redux';
import orgReducer from './orgReducer';
import issuesReducer from './issuesReducer';
import prReducer from './prReducer';
import milestonesReducer from './milestonesReducer';
import repoReducer from './repoReducer';
import renderPage from './renderReducer';

export const github = combineReducers({
  issues: issuesReducer,
  pullRequests: prReducer,
  milestones: milestonesReducer,
  repos: repoReducer,
  orgs: orgReducer,
  currentPage: renderPage,
});

const initialState = {
  ids: ['github'],
  byId: {},
};

const widgets = (state = initialState, action) => ({
  ...state,
  byId: {
    github: github(state.byId.github, action),
  },
});

const rootReducer = combineReducers({
  widgets,
});

export default rootReducer;
