import {
  GET_ISSUES,
  LOADING_ISSUES,
} from '../actions/issueActions';

function createState(json, incomingState, repoName) {
  const state = incomingState;
  state.issuesByRepo = {};
  json.forEach((issue) => {
    state.ids = state.ids.concat(issue.id);
    state.issuesById[issue.id] = {};
    state.issuesById[issue.id].title = issue.title;
    state.issuesById[issue.id].number = issue.number;
    state.issuesById[issue.id].assignedTo = [issue.assignee, issue.assigneeAvatar];
    state.issuesById[issue.id].labels = issue.labels.map(label => label.name);
    if (state.issuesByRepo[repoName]) {
      state.issuesByRepo[repoName] =
    state.issuesByRepo[repoName].concat(issue.id);
    } else { state.issuesByRepo[repoName] = [issue.id]; }
  });
  return { ...state, loadingIssues: false };
}

const issuesReducer = (state = { ids: [], issuesById: {}, loadingIssues: true, repoName: '' }, action) => {
  switch (action.type) {
    case GET_ISSUES:
      return createState(action.responseObj, state, action.repoName);
    case LOADING_ISSUES:
      return {
        ...state,
        loadingIssues: true,
      };

    default:
      return state;
  }
};

<<<<<<< HEAD
=======

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
 return state;
}

>>>>>>> mapped store, state, readme, mockAPI calls, and began wiring up components
>>>>>>> mapped store, state, readme, mockAPI calls, and began wiring up components
export default issuesReducer;
