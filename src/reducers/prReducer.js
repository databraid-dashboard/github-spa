import {
  GET_PRS,
  LOADING_PRS
} from '../actions/prActions';

<<<<<<< HEAD
const prReducer = (state = { ids: [], prsByID: {},  loadingPrTable: true}, action) => {

=======
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
>>>>>>> 2c48835... Adding repo view
  switch (action.type) {
    case GET_PRS:
      console.log(state, " reducer state");
      return createState(action.responseObj, state);
    case LOADING_PRS:
      return {...state, loadingPrTable: true}
    default:
      return state
  }
}

function createState(json, state){
<<<<<<< HEAD
=======
  console.log('json', json, state, 'state');
>>>>>>> 425eec6... fixed component mapping issues, created prTableTest
 json.forEach(pr => {
   state.ids = state.ids.concat(pr.id);
   state.prsByID[pr.id]={};
   state.prsByID[pr.id]['submittedBy'] = [pr.user.login, pr.user.avatar_url];
   state.prsByID[pr.id]['title'] = pr.title;
   state.prsByID[pr.id]['created'] = pr.created_at;
   state.prsByID[pr.id]['mergeable'] = pr.mergeable;
 });
 return {...state, loadingPrTable:false};
}

export default prReducer;
