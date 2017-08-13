import actionTypes from '../constants/actionTypes';

const defaultState = {
  browser: {},
  loaded: false,
  location: null,
};

function setLoaded(state, action) {
  return {
    ...state,
    ...action,
  };
}

function onWindowResize(state) {
  const width = window.innerWidth;
  const height = window.innerHeight;

  return {
    ...state,
    browser: {
      width,
      height,
    },
  };
}

function updateLocation(state, action) {
  return {
    ...state,
    ...action,
  };
}

const handlers = {
  [actionTypes.SET_LOADED]: setLoaded,
  [actionTypes.WINDOW_RESIZE]: onWindowResize,
  [actionTypes.UPDATE_LOCATION]: updateLocation,
};

export default function app(state = defaultState, action) {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
}
