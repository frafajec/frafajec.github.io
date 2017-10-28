import { createStore } from 'redux';

import reducers from '../reducers';
// import analyticsMiddleware from './middleware/analytics';

import calcInitialState from './initialState';

export default function newStore(overrideState = {}) {
  const defaultState = reducers(undefined, { type: 'init' });
  const initialState = { ...calcInitialState(), ...overrideState };

  // override individual properties in each section of the state
  Object.keys(initialState).map(key => {
    defaultState[key] = { ...defaultState[key], ...initialState[key] };
    return defaultState;
  });

  // return createStore(reducers, defaultState, applyMiddleware(analyticsMiddleware));
  return createStore(reducers, defaultState);
}
