import {
  GET_ORGS,
} from '../actions/orgActions';

<<<<<<< HEAD
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

export const orgReducer = (state = {id: [], orgsByID: {} }, action) => {
  switch (action.type) {
    case GET_ORGS:


    default:
    return {
      state,
    }

  }
}
>>>>>>> Begun component hookup, initial State, and related reducers
