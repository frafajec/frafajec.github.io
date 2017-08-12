import { compose, createStore, applyMiddleware } from 'redux';
import persistState from 'redux-localstorage';
import { keys } from 'lodash';

import reducers from '../reducers';
// import analyticsMiddleware from './middleware/analytics';

import calcInitialState from './initialState';

export default function newStore(overrideState = {}) {
  const defaultState = reducers(undefined, { type: 'init' });
  const initialState = { ...calcInitialState(), ...overrideState };

  // override individual properties in each section of the state
  keys(initialState).map(key => {
    defaultState[key] = { ...defaultState[key], ...initialState[key] };
    return defaultState;
  });

  // redux enhancer used for state saving
  const reduxStorageConfig = {
    key: 'appState',
  };

  const enhancer = compose(
    /* [middlewares] */
    // persistState(/*paths, config*/)
    persistState('local', reduxStorageConfig) // local state currently doesn't exist!
  );

  // return createStore(reducers, defaultState, applyMiddleware(analyticsMiddleware));
  return createStore(reducers, defaultState, enhancer);
}
