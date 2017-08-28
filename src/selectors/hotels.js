import { createSelector } from 'reselect';
import { makeTree } from '../utils/tree';

const hotelsListSelector = (state) => state.getIn(['hotels', 'list']);
const hotelsLoadingSelector = (state) => state.getIn(['hotels', 'loading']);

const makeHierarchicalHotelsData = () => createSelector(
  hotelsListSelector,
  (state) => {
    return makeTree(state);
  }
);

const makeHotelsLoadingData = () => createSelector(
  hotelsLoadingSelector,
  (state) => state 
);

export {
  makeHotelsLoadingData,
  makeHierarchicalHotelsData 
};