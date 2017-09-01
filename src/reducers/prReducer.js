import { GET_PRS, LOADING_PRS } from '../actions/prActions';

function createState(json, incomingState, repoName) {
  const state = incomingState;
  state.prsByRepo = {};
  json.forEach((pr) => {
    state.ids = state.ids.concat(pr.id);
    state.prsById[pr.id] = {};
    state.prsById[pr.id].submittedBy = pr.submittedBy;
    state.prsById[pr.id].title = pr.title;
    state.prsById[pr.id].created = pr.createdAt;
    state.prsById[pr.id].mergeable = pr.mergeable;
    if (state.prsByRepo[repoName]) {
      state.prsByRepo[repoName] =
    state.prsByRepo[repoName].concat(pr.id);
    } else { state.prsByRepo[repoName] = [pr.id]; }
  });
  return { ...state, loadingPrTable: false };
}

const prReducer = (state = { ids: [], prsById: {}, loadingPrTable: true, repoName: '' }, action) => {
  switch (action.type) {
    case GET_PRS:
      return createState(action.responseObj, state, action.repoName);
    case LOADING_PRS:
      return { ...state, loadingPrTable: true };
    default:
      return state;
  }
};


export default prReducer;
