
import { combineReducers } from 'redux';
import { repoReducer } from './repoReducer';

export const rootReducer = combineReducers({
  pullRequests: repoReducer,

});
