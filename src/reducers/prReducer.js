import {
  GET_PRS,
  LOADING_PRS,
} from '../actions/prActions';

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const prReducer = (state = { ids: [], prsByID: {},  loadingPrTable: true}, action) => {

=======
function createState(json, incomingState) {
=======
function createState(json, incomingState, repoName) {
>>>>>>> e19f169... Adding syced app
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

<<<<<<< HEAD
const prReducer = (state = { ids: [], prsById: {}, loadingPrTable: true }, action) => {
>>>>>>> 2c48835... Adding repo view
=======
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
>>>>>>> edbe0e0... fml
  switch (action.type) {
    case GET_PRS:
      console.log(state, " reducer state");
      return createState(action.responseObj, state);
=======
const prReducer = (state = { ids: [], prsById: {}, loadingPrTable: true, repoName: '' }, action) => {
  switch (action.type) {
    case GET_PRS:

      return createState(action.responseObj, state, action.repoName);
>>>>>>> e19f169... Adding syced app
    case LOADING_PRS:
      return { ...state, loadingPrTable: true };
    default:
      return state;
  }
};

<<<<<<< HEAD
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
=======
>>>>>>> edbe0e0... fml

export default prReducer;
