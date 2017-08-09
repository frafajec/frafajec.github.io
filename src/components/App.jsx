import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import actions from '../actions';

import AppRouter from '../router';

import './App.scssm';

// ------------------------------------------------------------------------------------------------
function mapStateToProps(state) {
  return {
    loaded: state.app.loaded,
    location: state.app.location,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setAppLoaded: () => dispatch(actions.setAppLoaded()),
  };
}

// ------------------------------------------------------------------------------------------------
const AppProps = {
  setAppLoaded: PropTypes.func.isRequired,
};

class App extends React.Component {
  componentDidMount() {
    this.props.setAppLoaded();
  }

  render() {
    return (
      <div styleName="App">
        <AppRouter />
      </div>
    );
  }
}
App.propTypes = AppProps;

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
