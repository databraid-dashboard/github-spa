import reposByOrg from '../SampleJSONResponses/reposByORGmock';

<<<<<<< HEAD
export GET_REPOS = 'GET_REPOS';
=======
export const GET_REPOS = 'GET_REPOS';
>>>>>>> 2c48835... Adding repo view

export const retrieveRepos = () => {
  return dispatch => {
    dispatch( {
      type: GET_REPOS,
<<<<<<< HEAD
      responseObj: //mock JSON data,
=======
      responseObj: reposByOrg,
>>>>>>> 2c48835... Adding repo view
    })
  }
}
