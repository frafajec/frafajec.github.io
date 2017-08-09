import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import actions from '../../actions';
import logo from '../../assets/logo.svg';

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
    console.log(this.props);

    return (
      <div styleName="App">
        <div styleName="App-header">
          <img src={logo} styleName="App-logo" alt="logo" />
          <h2 styleName="bla">Welcome to React</h2>
        </div>
        <p styleName="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
Homepage.propTypes = HomepageProps;

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
