import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import actions from '../../actions';

import Nav from '../Nav';
import Footer from '../Footer';

import './Projects.scssm';

// ------------------------------------------------------------------------------------------------
function mapStateToProps(state, ownProps) {
  let projectId = state.projects.projectId;
  if (!projectId) {
    // TODO in init of store!
    projectId = ownProps.match.params.projectId;
  }

  return {
    projectId,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

// ------------------------------------------------------------------------------------------------
const ProjectsProps = {
  projectId: PropTypes.string,
};
const ProjectsDefaultProps = {
  projectId: null,
};

class Projects extends React.Component {
  render() {
    const notif = (
      <div>
        {this.props.projectId}
      </div>
    );
    return (
      <div styleName="Projects">
        <Nav />
        <div styleName="Projects-container">Projects!</div>
        {!this.props.projectId ? null : notif}
        <Footer />
      </div>
    );
  }
}
Projects.propTypes = ProjectsProps;
Projects.defaultProps = ProjectsDefaultProps;

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Projects));
