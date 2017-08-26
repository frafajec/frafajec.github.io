import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';

import actions from '../actions';

// ------------------------------------------------------------------------------------------------
function mapStateToProps(state) {
  return {
    location: state.app.location,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    navigateTo: () => dispatch(actions.updateLocation(ownProps.path)),
  };
}

// ------------------------------------------------------------------------------------------------
const LinkProps = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  navigateTo: PropTypes.func.isRequired,
};

class Link extends React.Component {
  render() {
    const { path, label, navigateTo } = this.props;

    return (
      <NavLink to={path} activeClassName="active" onClick={navigateTo}>
        {label}
      </NavLink>
    );
  }
}
Link.propTypes = LinkProps;

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Link));
