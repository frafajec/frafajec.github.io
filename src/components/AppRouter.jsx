import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import actions from '../actions';

import Homepage from './Homepage';
import Projects from './Projects';

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
const AppRouterProps = {
  setAppLoaded: PropTypes.func.isRequired,
};

class AppRouter extends React.Component {
  render() {
    return (
      <div styleName="App-layout">
        <Route path="/" exact component={Homepage} />
        <Route path="/projects" component={Projects} />
      </div>
    );
  }
}
AppRouter.propTypes = AppRouterProps;

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
