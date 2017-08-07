import milestoneMock from '../SampleJSONResponses/milestonesMock';

export const GET_MILESTONES = 'GET_MILESTONES';
export const LOADING_MILESTONES = 'LOADING_MILESTONES';
export const retrieveMilestones = () => (dispatch) => {
  dispatch({
    type: LOADING_MILESTONES,
  });
  dispatch({
    type: GET_MILESTONES,
    responseObj: milestoneMock,
  });
};
