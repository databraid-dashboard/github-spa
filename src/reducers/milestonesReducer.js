import {
  GET_MILESTONES,
  LOADING_MILESTONES,
} from '../actions/milestonesActions';

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const milestonesReducer = (state = { ids:[], milestonesByID: {}}, action) => {

=======
function createState(json, incomingState) {
=======
function createState(json, incomingState, repoName) {
>>>>>>> e19f169... Adding syced app
  const state = incomingState;
  state.milestonesByRepo = {};
  json.forEach((milestone) => {
    state.ids = state.ids.concat(milestone.id);
    state.milestonesById[milestone.id] = {};
    state.milestonesById[milestone.id].title = milestone.title;
<<<<<<< HEAD
    state.milestonesById[milestone.id].due = milestone.due_on;
    state.milestonesById[milestone.id].created = milestone.created_at;
    state.milestonesById[milestone.id].percentComplete = milestone.closed_issues / (milestone.closed_issues + milestone.open_issues);
  });
  return { ...state, loadingMilestones: false };
}

const milestonesReducer = (state = { ids: [], milestonesById: {} }, action) => {
>>>>>>> 2c48835... Adding repo view
=======
function createState(json, incomingState) {
  const state = incomingState;
  json.forEach((milestone) => {
    state.ids = state.ids.concat(milestone.id);
    state.milestonesById[milestone.id] = {};
    state.milestonesById[milestone.id].title = milestone.title;
    state.milestonesById[milestone.id].due = milestone.due_on;
    state.milestonesById[milestone.id].created = milestone.created_at;
=======
    state.milestonesById[milestone.id].due = milestone.dueOn;
    state.milestonesById[milestone.id].percentComplete =
    milestone.closedIssues / (milestone.closedIssues +
    milestone.openIssues);
<<<<<<< HEAD
    if(state.milestonesByRepo[repoName])
    state.milestonesByRepo[repoName] =
    state.milestonesByRepo[repoName].concat(milestone.id)
    else
    state.milestonesByRepo[repoName] = [milestone.id]
>>>>>>> e19f169... Adding syced app
=======
    if (state.milestonesByRepo[repoName]) {
      state.milestonesByRepo[repoName] =
    state.milestonesByRepo[repoName].concat(milestone.id);
    } else { state.milestonesByRepo[repoName] = [milestone.id]; }
>>>>>>> 8213532... Frontend/Backend sync
  });
  return { ...state, loadingMilestones: false };
}

<<<<<<< HEAD
<<<<<<< HEAD
const milestonesReducer = (state = { ids: [], milestonesByID: {} }, action) => {
>>>>>>> edbe0e0... fml
=======
const milestonesReducer = (state = { ids: [], milestonesById: {} }, action) => {
>>>>>>> 88f4b03... Added passing tests on <Org and <Orgs
=======
const milestonesReducer = (state = { ids: [], milestonesById: {}, repoName: '' }, action) => {
>>>>>>> e19f169... Adding syced app
  switch (action.type) {
    case GET_MILESTONES:
      return createState(action.responseObj, state, action.repoName);

    case LOADING_MILESTONES:
      return {
        ...state,
        loadingMilestones: true,

      };

    default:
      return state;
  }
};

<<<<<<< HEAD
function createState(json, state){
 json.forEach(milestone => {
   state.ids = state.ids.concat(milestone.id);
   state.milestonesByID[milestone.id]={};
   state.milestonesByID[milestone.id]['title'] = milestone.title;
   state.milestonesByID[milestone.id]['due'] = milestone.due_on;
   state.milestonesByID[milestone.id]['created'] = milestone.created_at;
 });
<<<<<<< HEAD
 return {...state};
=======
 return {...state, loadingMilestones: false};
>>>>>>> 0365ab2... fixed related milestone: errors, loading feature, tests, must re-update snapshot, not rendering
}
=======
>>>>>>> edbe0e0... fml

export default milestonesReducer;
