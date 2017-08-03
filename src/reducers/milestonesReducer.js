import {
  GET_MILESTONES,
  LOADING_MILESTONES
} from '../actions/milestonesActions';

const milestonesReducer = (state = { ids: [], milestonesByID: {} }, action) => {

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
 return {...state, loadingMilestones: false};
}

export default milestonesReducer;
