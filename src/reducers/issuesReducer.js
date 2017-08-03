import {
  GET_ISSUES,
  LOADING_ISSUES
} from '../actions/issueActions';
const issuesReducer = (state = {ids:[], issuesById: {}, loadingIssues:true} , action) => {

  switch (action.type) {
    case GET_ISSUES:
      return createState (action.responseObj, state)
    case LOADING_ISSUES:
      return {
        ...state,
        loadingIssues: true,
      }
    default:
      return state
  }
}

function createState(json, state){
  console.log('json', json);
 json.forEach(repo => {
   state.ids = state.ids.concat(repo.id);
   state.issuesById[repo.id] = {};
   state.issuesById[repo.id]['title'] = repo.title;
   state.issuesById[repo.id]['repoIssueNumber'] = repo.number;
   state.issuesById[repo.id]['assignedTo'] = repo.assignees.map(assignee => assignee.avatar_url);
   state.issuesById[repo.id]['labels'] = repo.labels.map(label => { label.name, label.color })
 });
 return {...state, loadingIssues: false};
}

export default issuesReducer;
