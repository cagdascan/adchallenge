import { fromJS } from 'immutable';
import {
  LOAD_HOTELS,
  LOAD_HOTELS_SUCCESS,
  LOAD_HOTELS_FAIL,
} from '../constants';

const initialState = fromJS({
  loading: false,
  error: false,
  list: []
});

const hotelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_HOTELS:
      return state
        .set('loading', true)
        .set('error', false);
    case LOAD_HOTELS_SUCCESS:
      return state
        .set('list', action.data)
        .set('loading', false);
    case LOAD_HOTELS_FAIL: {
      console.log(action.error);
      return state
        .set('loading', false)
        .set('error', action.error);
    }
    default:
      return state;
  }
};

export default hotelsReducer;
