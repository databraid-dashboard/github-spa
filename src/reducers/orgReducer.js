import {
  GET_ORGS,
} from '../actions/orgActions';


export const orgReducer = (state = {id: [], orgsByID: {} }, action) => {
  switch (action.type) {
    case GET_ORGS:


    default:
    return {
      state,
    }

  }
}
