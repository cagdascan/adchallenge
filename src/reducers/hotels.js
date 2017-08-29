import { fromJS } from 'immutable';
import {
  LOAD_HOTELS,
  LOAD_HOTELS_SUCCESS,
  LOAD_HOTELS_FAIL,
  EXPAND_ELEMENT,
  COLLAPSE_ELEMENT,
  DELETE_ELEMENT
} from '../constants';

import { makeTree, deepUpdate, prune } from '../utils/tree';

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
    case LOAD_HOTELS_SUCCESS: {
      const list = action.data;
      list.forEach((item) => { item.expanded = false; });
      const tree = makeTree(list);
      return state
        .set('list', tree)
        .set('loading', false);
    }
    case LOAD_HOTELS_FAIL:
      return state
        .set('loading', false)
        .set('error', action.error);
    case EXPAND_ELEMENT: {
      const newList = state.get('list').slice(0);
      deepUpdate(newList, action.id, 'expanded', true);
      return state
        .set('list', newList);
    }
    case COLLAPSE_ELEMENT: {
      const newList = state.get('list').slice(0);
      deepUpdate(newList, action.id, 'expanded', false);
      return state
        .set('list', newList);
    }
    case DELETE_ELEMENT: {
      const newList = state.get('list').slice(0);
      prune(newList, action.id);
      return state
        .set('list', newList);
    }
    default:
      return state;
  }
};

export default hotelsReducer;
