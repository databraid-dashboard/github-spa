import milestoneMock from '../SampleJSONResponses/milestonesMock';

export const GET_MILESTONES = 'GET_MILESTONES';

export const retrieveMilestones = () => {
  return dispatch => {
    dispatch({
      type: GET_MILESTONES,
      responseObj: milestoneMock
    })
  }
}
