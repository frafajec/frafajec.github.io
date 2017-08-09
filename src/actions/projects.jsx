import actionTypes from '../constants/actionTypes';

function openProject(projectId) {
  return {
    type: actionTypes.OPEN_PROJECT,
    projectId,
  };
}

export default {
  openProject,
};
