
import {
  RECIEVE_ISSUES,
} from '../actions';
const issuesReducer = (state = {labels: [], assignedTo: [], milestones: []}, action) => {
  {id, reposById} = state.repos.reposById;
  switch (action.type) {
    case RECIEVE_ISSUES:
      return{
        ...state,
        id:[]
        reposById : {

          issues :{ action.data.map(issue => issue.title)},
          labels : action.data.labels.map(label => label)
          assignedTo : action.data.map(issue => issue.assignees.forEach(assignee => assignee))
        }
      }

    default:
      return {
        state
      }
  }
}

default export issuesReducer;
