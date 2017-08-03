import {
  GET_ORGS,
} from '../actions/orgActions';

const orgReducer = (state = { ids: [], orgsByID: {} }, action) => {

  switch (action.type) {
    case GET_ORGS:
      return createState(action.responseObj, state);
    // case LOADING_ORGS:
    //   return {
    //     ...state,
    //     loadingOrgs: true,
    //   }
    // case SHOW_ORGS:
    //   return {
    //     ...state,
    //     showOrgs: true,
    //   }
    default:
      return state
  }
}

function createState(json, state){
 json.forEach(org => {
   state.ids = state.ids.concat(org.id);
   state.orgsByID[org.id]={};
   state.orgsByID[org.id]['avatarUrl'] = org.avatar_url;
   state.orgsByID[org.id]['repoName'] = org.login;
   state.orgsByID[org.id]['reposUrl'] = org.repos_url;
 });
 return state;
}

export default orgReducer;
