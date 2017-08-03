import {
  GET_ORGS,
} from '../actions/orgActions';

function createState(json, incomingState) {
  const state = incomingState;
  json.forEach((org) => {
    state.ids = state.ids.concat(org.id);
    state.orgsById[org.id] = {};
    state.orgsById[org.id].avatarUrl = org.avatarUrl;
    state.orgsById[org.id].orgName = org.login;
    state.orgsById[org.id].reposUrl = org.url;
  });
  return { ...state };
}

const orgReducer = (state = { ids: [], orgsById: {} }, action) => {
  switch (action.type) {
    case GET_ORGS:
      return createState(action.responseObj, state);

    default:
      return state;
  }
};

export default orgReducer;
=======

function createState(json){
 let state = { ids: [], orgsByID: {} };
 json.forEach(org => {
   state.ids.push(org.id);
   state.orgsByID[org.id]={};
   state.orgsByID[org.id]['repo'] = org.login;
   state.orgsByID[org.id]['id'] = org.id;
   state.orgsByID[org.id]['url'] = org.repos_url;
 });
 return {...state};
}

export default orgReducer;
>>>>>>> mapped store, state, readme, mockAPI calls, and began wiring up components
