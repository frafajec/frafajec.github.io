import actionTypes from '../constants/actionTypes';

const defaultState = {
  projectId: null,
};

function openProject(state, action) {
  return {
    ...state,
    ...action,
  };
}

const handlers = {
  [actionTypes.OPEN_PROJECT]: openProject,
};

export default function projects(state = defaultState, action) {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
}
