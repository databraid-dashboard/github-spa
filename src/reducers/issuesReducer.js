import {
  GET_ISSUES,
<<<<<<< HEAD
<<<<<<< HEAD
  LOADING_ISSUES,
} from '../actions/issueActions';

function createState(json, incomingState) {
  const state = incomingState;
  const jsonFiltered = json.filter(repo => !repo.pull_request);
  jsonFiltered.forEach((repo) => {
    state.ids = state.ids.concat(repo.id);
    state.issuesById[repo.id] = {};
    state.issuesById[repo.id].title = repo.title;
    state.issuesById[repo.id].repoIssueNumber = repo.number;
    state.issuesById[repo.id].assignedTo =
    repo.assignees.map(assignee => [assignee.login, assignee.avatar_url]);
    state.issuesById[repo.id].labels = repo.labels.map(label => label.name);
  });
  return { ...state, loadingIssues: false };
}
=======
} from '../actions/issueActions';
const issuesReducer = (state = {ids:[], reposById: {}} , action) => {

  switch (action.type) {
    case GET_ISSUES:
      return createState (action.responseObj)
>>>>>>> mapped store, state, readme, mockAPI calls, and began wiring up components

const issuesReducer = (state = { ids: [], issuesById: {}, loadingIssues: true }, action) => {
  switch (action.type) {
    case GET_ISSUES:
      return createState(action.responseObj, state);
=======
  LOADING_ISSUES
} from '../actions/issueActions';
const issuesReducer = (state = {ids:[], issuesById: {}, loadingIssues:true} , action) => {

  switch (action.type) {
    case GET_ISSUES:
      return createState (action.responseObj, state)
>>>>>>> added loading feature, wrote tests
    case LOADING_ISSUES:
      return {
        ...state,
        loadingIssues: true,
<<<<<<< HEAD
      };
=======
      }
>>>>>>> added loading feature, wrote tests
    default:
      return state;
  }
};


<<<<<<< HEAD
=======

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
 });
<<<<<<< HEAD
 return state;
=======
 return {...state, loadingIssues: false};
>>>>>>> added loading feature, wrote tests
}

>>>>>>> mapped store, state, readme, mockAPI calls, and began wiring up components
export default issuesReducer;
