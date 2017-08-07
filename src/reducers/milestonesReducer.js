import {
  GET_MILESTONES,
  LOADING_MILESTONES,
} from '../actions/milestonesActions';

function createState(json, incomingState) {
  const state = incomingState;
  json.forEach((milestone) => {
    state.ids = state.ids.concat(milestone.id);
    state.milestonesById[milestone.id] = {};
    state.milestonesById[milestone.id].title = milestone.title;
    state.milestonesById[milestone.id].due = milestone.due_on;
    state.milestonesById[milestone.id].created = milestone.created_at;
    state.milestonesById[milestone.id].percentComplete = milestone.closed_issues / (milestone.closed_issues + milestone.open_issues);
  });
  return { ...state, loadingMilestones: false };
}

const milestonesReducer = (state = { ids: [], milestonesById: {} }, action) => {
  switch (action.type) {
    case GET_MILESTONES:
      return createState(action.responseObj, state);

    case LOADING_MILESTONES:
      return {
        ...state,
        loadingMilestones: true,

      };

    default:
      return state;
  }
};


export default milestonesReducer;
