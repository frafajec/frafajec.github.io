import { createStore, applyMiddleware } from 'redux';
import { keys } from 'lodash';

import reducers from '../reducers';
// import analyticsMiddleware from './middleware/analytics';

export default function newStore(initialState = {}) {
  const defaultState = reducers(undefined, { type: 'init' });

  // override individual properties in each section of the state
  keys(initialState).map(key => {
    defaultState[key] = { ...defaultState[key], ...initialState[key] };
    return defaultState;
  });

  // return createStore(reducers, defaultState, applyMiddleware(analyticsMiddleware));
  return createStore(reducers, defaultState);
}
