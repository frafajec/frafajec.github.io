import actionTypes from '../constants/actionTypes';

const defaultState = {
  loaded: false,
  location: null,
};

function setLoaded(state, action) {
  return {
    ...state,
    ...action,
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
  [actionTypes.UPDATE_LOCATION]: updateLocation,
};

export default function app(state = defaultState, action) {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
}
