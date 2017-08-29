import { GET_MILESTONES, LOADING_MILESTONES } from '../actions/milestonesActions';

function createState(json, incomingState, repoName) {
  const state = incomingState;
  state.milestonesByRepo = {};
  json.forEach((milestone) => {
    state.ids = state.ids.concat(milestone.id);
    state.milestonesById[milestone.id] = {};
    state.milestonesById[milestone.id].title = milestone.title;
    state.milestonesById[milestone.id].due = milestone.dueOn;
    state.milestonesById[milestone.id].percentComplete =
    milestone.closedIssues / (milestone.closedIssues +
    milestone.openIssues);
    if (state.milestonesByRepo[repoName]) {
      state.milestonesByRepo[repoName] =
    state.milestonesByRepo[repoName].concat(milestone.id);
    } else { state.milestonesByRepo[repoName] = [milestone.id]; }
  });
  return { ...state, loadingMilestones: false };
}

const milestonesReducer = (state = { ids: [], milestonesById: {}, repoName: '' }, action) => {
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

export default milestonesReducer;
