import {
  GET_PRS,
  LOADING_PRS,
} from '../actions/prActions';

function createState(json, incomingState) {
  const state = incomingState;
  json.forEach((pr) => {
    state.ids = state.ids.concat(pr.id);
    state.prsById[pr.id] = {};
    state.prsById[pr.id].submittedBy = [pr.user.login, pr.user.avatar_url];
    state.prsById[pr.id].title = pr.title;
    state.prsById[pr.id].created = pr.created_at;
    state.prsById[pr.id].mergeable = pr.mergeable;
  });
  return { ...state, loadingPrTable: false };
}

const prReducer = (state = { ids: [], prsById: {}, loadingPrTable: true }, action) => {
  switch (action.type) {
    case GET_PRS:

      return createState(action.responseObj, state);
    case LOADING_PRS:
      return { ...state, loadingPrTable: true };
    default:
      return state;
  }
};

} from '../actions/prActions';

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
