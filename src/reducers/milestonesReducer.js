import {
  GET_MILESTONES,
  LOADING_MILESTONES
} from '../actions/milestonesActions';

<<<<<<< HEAD
const milestonesReducer = (state = { ids:[], milestonesByID: {}}, action) => {

=======
function createState(json, incomingState) {
  const state = incomingState;
  json.forEach((milestone) => {
    state.ids = state.ids.concat(milestone.id);
    state.milestonesById[milestone.id] = {};
    state.milestonesById[milestone.id].title = milestone.title;
    state.milestonesById[milestone.id].due = milestone.due_on;
    state.milestonesById[milestone.id].created = milestone.created_at;
  });
  return { ...state, loadingMilestones: false };
}

const milestonesReducer = (state = { ids: [], milestonesById: {} }, action) => {
>>>>>>> 2c48835... Adding repo view
  switch (action.type) {
    case GET_MILESTONES:
      return createState(action.responseObj, state);

    case LOADING_MILESTONES:
      return {
        ...state,
        loadingMilestones: true

      }

    default:
      return state
  }
}

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

export default milestonesReducer;
