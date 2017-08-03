import {
  GET_ISSUES,
} from '../actions/issueActions';
const issuesReducer = (state = {ids:[], issuesById: {}} , action) => {

  switch (action.type) {
    case GET_ISSUES:
      return createState (action.responseObj, state)

    default:
      return state
  }
}

function createState(json, state){
 json.forEach(repo => {
   state.ids = state.ids.concat(repo.id);
   state.issuesById[repo.id] = {};
   state.issuesById[repo.id]['title'] = repo.title;
   state.issuesById[repo.id]['repoIssueNumber'] = repo.number;
   state.issuesById[repo.id]['assignedTo'] = repo.assignees.map(assignee => assignee.login);
   state.issuesById[repo.id]['labels'] = repo.labels.map(label => label.name)
 });
 return {...state};
}

export default issuesReducer;
