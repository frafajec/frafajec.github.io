import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import actions from '../../actions';

import Nav from '../Nav';
import Footer from '../Footer';

import './Homepage.scssm';

// ------------------------------------------------------------------------------------------------
function mapStateToProps(state, props) {
  return {
    path: props.match.path,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

// ------------------------------------------------------------------------------------------------
const HomepageProps = {};

class Homepage extends React.Component {
  render() {
    return (
      <div styleName="Home">
        <Nav />
        <div styleName="Home-container">Homepage!</div>
        <Footer />
      </div>
    );
  }
}
Homepage.propTypes = HomepageProps;

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Homepage));
