import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../actions';

import logo from '../logo.svg';

import './App.scssm';

// ------------------------------------------------------------------------------------------------
function mapStateToProps(state) {
  return {
    loaded: state.app.loaded,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setAppLoaded: () => dispatch(actions.setAppLoaded()),
  };
}

// ------------------------------------------------------------------------------------------------
const AppPropTypes = {
  setAppLoaded: PropTypes.func.isRequired,
};

class App extends React.Component {
  componentDidMount() {
    this.props.setAppLoaded();
  }

  render() {
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
App.propTypes = AppPropTypes;

export default connect(mapStateToProps, mapDispatchToProps)(App);
