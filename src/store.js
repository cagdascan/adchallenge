import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import createReducer from './reducers';

export default function configureStore(initialState = {}) {
  const middlewares = [
    thunk
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    composeEnhancers(...enhancers)
  );

  return store;
}
