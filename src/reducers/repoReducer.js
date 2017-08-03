import {
  GET_REPOS
} from '../actions/repoActions';

const repoReducer = {state = ids:[], reposById: {} }, action) => {

  switch (action.type) {
    case GET_REPOS:
      return createState(action.responseObj, state);

    default:
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

export default repoReducer;
