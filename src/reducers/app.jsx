import actionTypes from '../constants/actionTypes';

const defaultState = {
  browser: {},
  loaders: {
    app: false,
    jumbotron: false,
  },
  loaded: false,
  location: null,
};

function setLoaded(state, action) {
  const loaders = {
    ...state.loaders,
    ...action,
  };

  let loaded = true;
  Object.keys(loaders).map(k => {
    if (!loaders[k]) {
      loaded = false;
    }

    return k;
  });

  return {
    ...state,
    loaders,
    loaded,
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

const handlers = {
  [actionTypes.SET_APP_LOADED]: setLoaded,
  [actionTypes.SET_JUMBOTRON_LOADED]: setLoaded,
  [actionTypes.SET_LOADED]: setLoaded,
  [actionTypes.WINDOW_RESIZE]: onWindowResize,
};

export default function app(state = defaultState, action) {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
}
