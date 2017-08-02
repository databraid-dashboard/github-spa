import prMock from '../SampleJSONResponses/PRmock';

export const GET_PRS = 'GET_PRS';

export const retrievePrs = () => {
  return dispatch => {
    dispatch({
      type: GET_PRS,
      responseObj: prMock
    })
  }
}
