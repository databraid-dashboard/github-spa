import { GET_ORGS } from '../actions/orgActions';
import { LOGOUT } from '../actions/renderActions';

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
const initialState = {
  ids: [],
  orgsById: {},
};
const orgReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORGS:
      return createState(action.responseObj, state);

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
};

export default orgReducer;
