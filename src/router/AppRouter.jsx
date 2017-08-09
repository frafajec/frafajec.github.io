import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

import actions from '../actions';
import routes from './routes';

import Homepage from '../components/Homepage';
import Projects from '../components/Projects';

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
    // TODO redirect kills sub routes!
    return (
      <div>
        <Route path={routes.HOME} exact component={Homepage} />
        <Route path={routes.PROJECTS} component={Projects} />
        {/* <Redirect to={routes.HOME} /> */}
      </div>
    );
  }
}
AppRouter.propTypes = AppRouterProps;

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppRouter));
