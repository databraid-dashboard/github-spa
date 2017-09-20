import { GET_ORGS } from '../actions/orgActions';

//TODO: ORGS. PRS and REPOS should follow same pattern as issuesreducer as far as logoug is concernted
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
