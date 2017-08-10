import {
<<<<<<< HEAD
  GET_REPOS
} from '../actions/repoActions';

<<<<<<< HEAD
const repoReducer = {state = ids:[], reposById: {} }, action) => {
=======
function createState(json, incomingState) {
<<<<<<< HEAD
  // console.log('json',json);
=======
  GET_REPOS,
} from '../actions/repoActions';

<<<<<<< HEAD
function createState(json, incomingState) {
>>>>>>> edbe0e0... fml
=======
>>>>>>> 564c283... Fixing warning messages from tests
=======
function createState(json, incomingState, orgName) {
>>>>>>> e19f169... Adding syced app
  const state = incomingState;
  state.reposByOrg = {};
  if(json) {
    json.forEach((repo) => {
      state.ids = state.ids.concat(repo.id);
      state.reposById[repo.id] = {};
      state.reposById[repo.id].repoName = repo.name;
      state.reposById[repo.id].repoUrl = repo.html_url;
      if(state.reposByOrg[orgName])
      state.reposByOrg[orgName] = state.reposByOrg[orgName].concat(repo.id)
      else
      state.reposByOrg[orgName] = [repo.id]
    });
  }
  return { ...state };
}
<<<<<<< HEAD
>>>>>>> 2c48835... Adding repo view

=======

<<<<<<< HEAD
const repoReducer = (state = { ids: [], reposById: {} }, action) => {
>>>>>>> edbe0e0... fml
=======
const repoReducer = (state = { ids: [], reposById: {}, orgName: '' }, action) => {
>>>>>>> e19f169... Adding syced app
  switch (action.type) {
    case GET_REPOS:
      return createState(action.responseObj, state, action.orgName);

    default:
<<<<<<< HEAD
      return state
  }
}

function createState(json, state) {
  json.forEach(repo => {
    state.ids = state.ids.concat(repo.id);
    state.reposById[repo.id]={};
    state.reposById[repo.id]['repoName']=repo.name;
    state.reposById[repo.id]['repoUrl']=repo.html_url;
  });
  return {...state};
}
=======
      return state;
  }
};

<<<<<<< HEAD
>>>>>>> edbe0e0... fml

=======
>>>>>>> 564c283... Fixing warning messages from tests
export default repoReducer;
