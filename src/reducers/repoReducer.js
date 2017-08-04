import {
  GET_REPOS,
} from '../actions/repoActions';

function createState(json, incomingState) {
  const state = incomingState;
  json.forEach((repo) => {
    state.ids = state.ids.concat(repo.id);
    state.reposById[repo.id] = {};
    state.reposById[repo.id].repoName = repo.name;
    state.reposById[repo.id].repoUrl = repo.html_url;
  });
  return { ...state };
}

const repoReducer = (state = { ids: [], reposById: {} }, action) => {
  switch (action.type) {
    case GET_REPOS:
      return createState(action.responseObj, state);

    default:
      return state;
  }
};


export default repoReducer;
