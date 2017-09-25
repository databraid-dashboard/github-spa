import { GET_PRS, LOADING_PRS } from '../actions/prActions';
import { LOGOUT } from '../actions/renderActions';

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
const initialState = {
  ids: [],
  prsById: {},
  loadingPrTable: true,
  repoName: '',
};
const prReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRS:
      return createState(action.responseObj, state, action.repoName);
    case LOADING_PRS:
      return { ...state, loadingPrTable: true };

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
};


export default prReducer;
