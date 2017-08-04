import {
<<<<<<< HEAD
  GET_REPOS
} from '../actions/repoActions';

<<<<<<< HEAD
const repoReducer = {state = ids:[], reposById: {} }, action) => {
=======
function createState(json, incomingState) {
  // console.log('json',json);
=======
  GET_REPOS,
} from '../actions/repoActions';

function createState(json, incomingState) {
>>>>>>> edbe0e0... fml
  const state = incomingState;
  json.forEach((repo) => {
    state.ids = state.ids.concat(repo.id);
    state.reposById[repo.id] = {};
    state.reposById[repo.id].repoName = repo.name;
    state.reposById[repo.id].repoUrl = repo.html_url;
  });
  return { ...state };
}
<<<<<<< HEAD
>>>>>>> 2c48835... Adding repo view

=======

const repoReducer = (state = { ids: [], reposById: {} }, action) => {
>>>>>>> edbe0e0... fml
  switch (action.type) {
    case GET_REPOS:
      return createState(action.responseObj, state);

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

>>>>>>> edbe0e0... fml

export default repoReducer;
