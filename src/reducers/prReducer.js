import {
  GET_PRS,
  LOADING_PRS,
} from '../actions/prActions';

function createState(json, incomingState) {
  const state = incomingState;
  json.forEach((pr) => {
    state.ids = state.ids.concat(pr.id);
    state.prsByID[pr.id] = {};
    state.prsByID[pr.id].submittedBy = [pr.user.login, pr.user.avatar_url];
    state.prsByID[pr.id].title = pr.title;
    state.prsByID[pr.id].created = pr.created_at;
    state.prsByID[pr.id].mergeable = pr.mergeable;
  });
  return { ...state, loadingPrTable: false };
}

const prReducer = (state = { ids: [], prsByID: {}, loadingPrTable: true }, action) => {
  switch (action.type) {
    case GET_PRS:

      return createState(action.responseObj, state);
    case LOADING_PRS:
      return { ...state, loadingPrTable: true };
    default:
      return state;
  }
};


export default prReducer;
