import { GET_ISSUES, LOADING_ISSUES } from '../actions/issueActions';
import { LOGOUT } from '../actions/renderActions';

function createState(json, incomingState, repoName) {
  const state = incomingState;
  state.issuesByRepo = {};
  json.filter(issue => !issue.isPR).forEach((issue) => {
    state.ids = state.ids.concat(issue.id);
    state.issuesById[issue.id] = {};
    state.issuesById[issue.id].title = issue.title;
    state.issuesById[issue.id].number = issue.number;
    state.issuesById[issue.id].assignedTo = [issue.assignee, issue.assigneeAvatar];
    state.issuesById[issue.id].labels = issue.labels.map(label => label.name);
    if (state.issuesByRepo[repoName]) {
      state.issuesByRepo[repoName] = state.issuesByRepo[repoName].concat(issue.id);
    } else {
      state.issuesByRepo[repoName] = [issue.id];
    }
  });
  return { ...state, loadingIssues: false };
}
const initialState = {
  ids: [],
  issuesById: {},
  loadingIssues: true,
  repoName: '',
};

const issuesReducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case GET_ISSUES:
      return createState(action.responseObj, state, action.repoName);
    case LOADING_ISSUES:
      return {
        ...state,
        loadingIssues: true,
      };
    case LOGOUT:
      return initialState;

    default:
      return state;
  }
};

export default issuesReducer;
