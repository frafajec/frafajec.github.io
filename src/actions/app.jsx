import scroller from 'react-scroll/modules/mixins/scroller';
import actionTypes from '../constants/actionTypes';

function setAppLoaded() {
  return {
    type: actionTypes.SET_APP_LOADED,
    app: true,
  };
}

function setJumbotronLoaded() {
  return {
    type: actionTypes.SET_JUMBOTRON_LOADED,
    jumbotron: true,
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
  setJumbotronLoaded,
  onWindowResize,
  scrollTo,
};
