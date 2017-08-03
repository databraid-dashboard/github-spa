import {
<<<<<<< HEAD
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
=======
  GET_REPOS
} from '../actions/repoActions';

const repoReducer = {state = ids:[], reposById: {} }, action) => {

>>>>>>> Adding components re-organized
  switch (action.type) {
    case GET_REPOS:
      return createState(action.responseObj, state);

    default:
<<<<<<< HEAD
      return state;
  }
};
=======
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
>>>>>>> Adding components re-organized

export default repoReducer;
