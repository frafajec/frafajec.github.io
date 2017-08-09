import actionTypes from '../constants/actionTypes';

function setAppLoaded() {
  return {
    type: actionTypes.SET_LOADED,
    loaded: true,
  };
}

function updateLocation(location) {
  return {
    type: actionTypes.UPDATE_LOCATION,
    location,
  };
}

export default {
  setAppLoaded,
  updateLocation,
};
