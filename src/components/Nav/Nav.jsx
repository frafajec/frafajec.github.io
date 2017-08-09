import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Link, routes } from '../../router';

import './Nav.scssm';

// ------------------------------------------------------------------------------------------------
function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

// ------------------------------------------------------------------------------------------------
const NavProps = {};

class Nav extends React.Component {
  render() {
    return (
      <div styleName="Nav">
        <div styleName="Nav-left">
          <Link path={routes.HOME} label={'Home'} />
        </div>
        <div styleName="Nav-right">
          <Link path={routes.PROJECTS} label={'Projects'} />
        </div>
      </div>
    );
  }
}
Nav.propTypes = NavProps;

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));
