import prMock from '../SampleJSONResponses/PRmock';

export const GET_PRS = 'GET_PRS';
export const LOADING_PRS = 'LOADING_PRS';
export const retrievePrs = () => (dispatch) => {
  dispatch({ type: LOADING_PRS });
  dispatch({
    type: GET_PRS,
    responseObj: prMock,
  });
};
