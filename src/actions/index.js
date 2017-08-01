// temporary diable NOTE remove temp stuff
/* eslint-disable no-unused-vars */
<<<<<<< HEAD
import prActions from './prActions';
import issuesMock from '../../SampleJSONResponses/IssuesJSON';

export const RECIEVE_ISSUES = 'RECIEVE_ISSUES';
export const getAllIssues(repo) => {
    return  dispatch => {
      let jsonData =  issuesMock;
      dispatch({
        type: RECIEVE_ISSUES,
        data: jsonData,
      })
    }
}
=======

import {
  store,
} from '../store';
/* es-lint disable no-unused-vars */
import prActions from './prActions';
>>>>>>> 49a3039... combined efforts (#1)
