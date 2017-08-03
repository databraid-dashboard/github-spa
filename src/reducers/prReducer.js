import {
  GET_PRS,
} from '../actions/prActions';

const prReducer = (state = { ids: [], prsByID: {} }, action) => {

  switch (action.type) {
    case GET_PRS:
      return createState(action.responseObj, state);

    default:
      return state
  }
}

function createState(json, state){
  console.log('json', json);
 json.forEach(pr => {
   state.ids = state.ids.concat(pr.id);
   state.prsByID[pr.id]={};
   state.prsByID[pr.id]['submittedBy'] = pr.user.login;
   state.prsByID[pr.id]['title'] = pr.title;
   state.prsByID[pr.id]['created'] = pr.created_at;
   state.prsByID[pr.id]['mergeable'] = pr.mergeable;
 });
 return state;
}

export default prReducer;
