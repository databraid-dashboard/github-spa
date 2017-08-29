import { GET_REPOS } from '../actions/repoActions';

function createState(json, incomingState, orgName) {
  const state = incomingState;
  state.reposByOrg = {};
  if (json) {
    json.forEach((repo) => {
      state.ids = state.ids.concat(repo.id);
      state.reposById[repo.id] = {};
      state.reposById[repo.id].repoName = repo.name;
      state.reposById[repo.id].repoUrl = repo.html_url;
      if (state.reposByOrg[orgName]) {
        state.reposByOrg[orgName] =
        state.reposByOrg[orgName].concat(repo.id);
      } else {
        state.reposByOrg[orgName] = [repo.id];
      }
    });
  }
  return { ...state };
}

const repoReducer = (state = { ids: [], reposById: {}, orgName: '' }, action) => {
  switch (action.type) {
    case GET_REPOS:
      return createState(action.responseObj, state, action.orgName);
    default:
      return state;
  }
};

export default repoReducer;
