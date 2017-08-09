import reposByOrg from '../SampleJSONResponses/reposByORGmock';

// const request = { query: '{orgs(userName: "michaelmurray6298") {orgs {id login url avatarUrl } } }' };

export const GET_REPOS = 'GET_REPOS';

export const retrieveRepos = () => (dispatch) => {
  dispatch({
    type: GET_REPOS,
    responseObj: reposByOrg,
  });
};
