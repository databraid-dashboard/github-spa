import reposByOrg from '../SampleJSONResponses/reposByORGmock';

export const GET_REPOS = 'GET_REPOS';

export const retrieveRepos = () => (dispatch) => {
  dispatch({
    type: GET_REPOS,
    responseObj: reposByOrg,
  });
};
