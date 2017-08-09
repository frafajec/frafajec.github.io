import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';

import actions from '../../actions';

import './Footer.scssm';

// ------------------------------------------------------------------------------------------------
function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

// ------------------------------------------------------------------------------------------------
const FooterProps = {};

class Footer extends React.Component {
  render() {
    return <div styleName="Footer">Footer!</div>;
  }
}
Footer.propTypes = FooterProps;

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Footer));
