import actionTypes from '../constants/actionTypes';

function setAppLoaded() {
  return {
    type: actionTypes.SET_LOADED,
    loaded: true,
  };
}

export default {
  setAppLoaded,
};
