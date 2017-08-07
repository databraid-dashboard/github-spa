
import {
  GET_ISSUES,
  LOADING_ISSUES,
} from '../actions/issueActions';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const issuesReducer = (state = {ids:[], reposById: {}} , action) => {

<<<<<<< HEAD
  switch (action.type) {
    case GET_ISSUES:
      return createState (action.responseObj)

=======
const issuesReducer = (state = {ids:[], issuesById: {}, loadingIssues:true} , action) => {
=======
const issuesReducer = (state = {ids:[], issuesById: {}, loadingIssues: true} , action) => {
>>>>>>> 8aab236... added loading bar and tests
=======
function createState(json, incomingState) {
  const state = incomingState;
  json = json.filter(repo => !repo.pull_request);
  json.forEach((repo) => {
    state.ids = state.ids.concat(repo.id);
    state.issuesById[repo.id] = {};
    state.issuesById[repo.id].title = repo.title;
    state.issuesById[repo.id].repoIssueNumber = repo.number;
    state.issuesById[repo.id].assignedTo = repo.assignees.map(assignee => [assignee.login, assignee.avatar_url]);
    state.issuesById[repo.id].labels = repo.labels.map(label => label.name);
  });
  return { ...state, loadingIssues: false };
}
>>>>>>> 2c48835... Adding repo view
=======
>>>>>>> edbe0e0... fml

function createState(json, incomingState) {
  const state = incomingState;
  json.forEach((repo) => {
    state.ids = state.ids.concat(repo.id);
    state.issuesById[repo.id] = {};
    state.issuesById[repo.id].title = repo.title;
    state.issuesById[repo.id].repoIssueNumber = repo.number;
    state.issuesById[repo.id].assignedTo = repo.assignees.map(assignee => [assignee.login, assignee.avatar_url]);
    state.issuesById[repo.id].labels = repo.labels.map(label => label.name);
  });
  return { ...state, loadingIssues: false };
}

const issuesReducer = (state = { ids: [], issuesById: {}, loadingIssues: true }, action) => {
  switch (action.type) {
    case GET_ISSUES:
      return createState(action.responseObj, state);
    case LOADING_ISSUES:
      return {
        ...state,
        loadingIssues: true,
<<<<<<< HEAD
      }
>>>>>>> dab0224... added loading feature, wrote tests
    default:
      return {
        state
      }
=======
      };
    default:
      return state;
>>>>>>> edbe0e0... fml
  }
};

<<<<<<< HEAD
<<<<<<< HEAD

function createState(json){
  console.log(json);
 let state = { ids: [], reposByID: {} };
 json.forEach(repo => {
   state.ids.push(repo.id);
   state.reposByID[repo.id] = {};
   state.reposByID[repo.id].issues = {};
   state.reposByID[repo.id].issues['title'] = repo.title;
   state.reposByID[repo.id].issues['number'] = repo.number;
   state.reposByID[repo.id].issues['assignedTo'] = repo.assignees.map(assignee => assignee.avatar_url);
   state.reposByID[repo.id].issues['labels'] = repo.labels.map(label => { label.name, label.color })
=======
function createState(json, state){
 json.forEach(repo => {
   state.ids = state.ids.concat(repo.id);
   state.issuesById[repo.id] = {};
   state.issuesById[repo.id]['title'] = repo.title;
   state.issuesById[repo.id]['repoIssueNumber'] = repo.number;
   state.issuesById[repo.id]['assignedTo'] = repo.assignees.map(assignee => [assignee.login,assignee.avatar_url]);
   state.issuesById[repo.id]['labels'] = repo.labels.map(label => label.name)
>>>>>>> d3454fd... Adding PR Table and Milestones Components
 });
<<<<<<< HEAD
 return state;
=======
 return {...state, loadingIssues: false};
>>>>>>> dab0224... added loading feature, wrote tests
}
=======
>>>>>>> edbe0e0... fml

export default issuesReducer;
