import scroller from 'react-scroll/modules/mixins/scroller';
import actionTypes from '../constants/actionTypes';

function setAppLoaded() {
  return {
    type: actionTypes.SET_LOADED,
    loaded: true,
  };
}

function onWindowResize() {
  return {
    type: actionTypes.WINDOW_RESIZE,
  };
}

// no-reduce
function scrollTo(location) {
  scroller.scrollTo(location, { smooth: true, duration: 800 });

  return {
    type: actionTypes.SCROLL,
    location,
  };
}

export default {
  setAppLoaded,
  onWindowResize,
  scrollTo,
};
