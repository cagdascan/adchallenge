import { createSelector } from 'reselect';

const hotelsListSelector = (state) => state.getIn(['hotels', 'list']);
const hotelsLoadingSelector = (state) => state.getIn(['hotels', 'loading']);

const makeHotelsData = () => createSelector(
  hotelsListSelector,
  (state) => Array.isArray(state) ? state : []
);

const makeHotelsLoadingData = () => createSelector(
  hotelsLoadingSelector,
  (state) => state 
);

export {
  makeHotelsData,
  makeHotelsLoadingData
};