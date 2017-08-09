import {
  GET_ORGS,
} from '../actions/orgActions';

<<<<<<< HEAD
<<<<<<< HEAD


const orgReducer = (state = {ids: [], orgsByID: {} }, action) => {

=======
function createState(json, incomingState) {
  const state = incomingState;
  json.forEach((org) => {
    state.ids = state.ids.concat(org.id);
    state.orgsById[org.id] = {};
    state.orgsById[org.id].avatarUrl = org.avatar_url;
    state.orgsById[org.id].orgName = org.login;
    state.orgsById[org.id].reposUrl = org.url;
  });
  return { ...state };
}

const orgReducer = (state = { ids: [], orgsById: {} }, action) => {
>>>>>>> 2c48835... Adding repo view
=======
function createState(json, incomingState) {
  const state = incomingState;
  json.forEach((org) => {
    state.ids = state.ids.concat(org.id);
    state.orgsById[org.id] = { };
    state.orgsById[org.id].avatarUrl = org.avatar_url;
    state.orgsById[org.id].orgName = org.login;
    state.orgsById[org.id].reposUrl = org.repos_url;
  });
  return { ...state };
}

<<<<<<< HEAD
const orgReducer = (state = { ids: [], orgsByID: {} }, action) => {
>>>>>>> edbe0e0... fml
=======
const orgReducer = (state = { ids: [], orgsById: {} }, action) => {
>>>>>>> 88f4b03... Added passing tests on <Org and <Orgs
  switch (action.type) {
    case GET_ORGS:
<<<<<<< HEAD
      return createState(action.responseObj);

=======
      return createState(action.responseObj, state);
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> d3454fd... Adding PR Table and Milestones Components
=======

>>>>>>> 9486a99... Adding components re-organized
    default:
    return {
      state,
    }
=======

    default:
      return state;
>>>>>>> edbe0e0... fml
  }
};

<<<<<<< HEAD
<<<<<<< HEAD
function createState(json){
 let state = { ids: [], orgsByID: {} };
 json.forEach(org => {
   state.ids.push(org.id);
   state.orgsByID[org.id]={};
<<<<<<< HEAD
   state.orgsByID[org.id]['repo'] = org.login;
   state.orgsByID[org.id]['id'] = org.id;
   state.orgsByID[org.id]['url'] = org.repos_url;
=======
   state.orgsByID[org.id]['avatarUrl'] = org.avatar_url;
   state.orgsByID[org.id]['orgName'] = org.login;
   state.orgsByID[org.id]['reposUrl'] = org.repos_url;
>>>>>>> 9486a99... Adding components re-organized
 });
 return {...state};
}
=======
>>>>>>> edbe0e0... fml

=======
>>>>>>> b6ccb44... Parsed strings properly in ProgressArc, passed milestoneId down into ProgressArc
export default orgReducer;
