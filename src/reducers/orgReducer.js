import {
  GET_ORGS,
} from '../actions/orgActions';

function createState(json, incomingState) {
  const state = incomingState;
  json.forEach((org) => {
    state.ids = state.ids.concat(org.id);
    state.orgsByID[org.id] = {};
    state.orgsByID[org.id].avatarUrl = org.avatar_url;
    state.orgsByID[org.id].orgName = org.login;
    state.orgsByID[org.id].reposUrl = org.repos_url;
  });
  return { ...state };
}

const orgReducer = (state = { ids: [], orgsByID: {} }, action) => {
  switch (action.type) {
    case GET_ORGS:
      return createState(action.responseObj, state);

    default:
      return state;
  }
};


export default orgReducer;
