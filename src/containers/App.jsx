import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import actions from '../actions';

import AppRouter from '../router';
import Loader from '../components/Loader';

import './App.scssm';

// ------------------------------------------------------------------------------------------------
function mapStateToProps(state) {
  return {
    loaded: state.app.loaded,
    browser: state.app.browser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setAppLoaded: () => dispatch(actions.setAppLoaded()),
    onWindowResize: () => dispatch(actions.onWindowResize()),
  };
}

// ------------------------------------------------------------------------------------------------
const AppProps = {
  loaded: PropTypes.bool.isRequired,

  setAppLoaded: PropTypes.func.isRequired,
  onWindowResize: PropTypes.func.isRequired,
};

class App extends React.Component {
  componentDidMount() {
    window.addEventListener('resize', this.props.onWindowResize);
    this.props.setAppLoaded();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.props.onWindowResize);
  }

  render() {
    return (
      <div styleName="App">
        {this.props.loaded ? null : <Loader />}
        <AppRouter />
      </div>
    );
  }
}
App.propTypes = AppProps;

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
