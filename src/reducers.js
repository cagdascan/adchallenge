import { combineReducers } from 'redux-immutable';

import hotelsReducer from './reducers/hotels';

const createReducer = () => {
  return combineReducers({
    hotels: hotelsReducer
  });
};

export default createReducer;
