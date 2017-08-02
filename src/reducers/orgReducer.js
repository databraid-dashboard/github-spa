import {
  GET_ORGS,
} from '../actions/orgActions';



const orgReducer = (state = {ids: [], orgsByID: {} }, action) => {

  switch (action.type) {
    case GET_ORGS:
      return createState(action.responseObj);

    default:
    return {
      state,
    }
  }
}

function createState(json){
 let state = { ids: [], orgsByID: {} };
 json.forEach(org => {
   state.ids.push(org.id);
   state.orgsByID[org.id]={};
   state.orgsByID[org.id]['repo'] = org.login;
   state.orgsByID[org.id]['id'] = org.id;
   state.orgsByID[org.id]['url'] = org.repos_url;
 });
 return state;
}

export default orgReducer;
