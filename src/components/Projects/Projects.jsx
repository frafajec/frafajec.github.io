import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import actions from '../../actions';

import './Projects.scssm';

// ------------------------------------------------------------------------------------------------
function mapStateToProps(state) {
  return {
    projectId: state.projects.projectId,
  };
}

function mapDispatchToProps(dispatch) {
  return { updateLocation: location => dispatch(actions.updateLocation(location)) };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  const mergedProps = {
    navigateTo: () => {
      ownProps.history.push('/'); // TODO!!!! not working
      dispatchProps.updateLocation('/');
    },
  };

  return { ...ownProps, ...stateProps, ...dispatchProps, ...mergedProps };
}

// ------------------------------------------------------------------------------------------------
const ProjectsProps = {
  // projectId: PropTypes.string.isRequired,
  navigateTo: PropTypes.func.isRequired,
};

class Projects extends React.Component {
  render() {
    return (
      <div styleName="Projects">
        Projects!!
        <button onClick={this.props.navigateTo}>Home</button>
      </div>
    );
  }
}
Projects.propTypes = ProjectsProps;

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Projects);
