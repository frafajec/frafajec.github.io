import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

import routes from './routes';

import Homepage from '../containers/Homepage';
import Projects from '../containers/Projects';
import Contact from '../containers/Contact';

// ------------------------------------------------------------------------------------------------
const AppRouterProps = {};

class AppRouter extends React.Component {
  render() {
    // TODO redirect kills sub routes!
    return (
      <div>
        <Route path={routes.HOME} exact component={Homepage} />
        <Route path={routes.PROJECTS} component={Projects} />
        <Route path={routes.CONTACT} component={Contact} />
        {/* <Redirect to={routes.HOME} /> */}
      </div>
    );
  }
}
AppRouter.propTypes = AppRouterProps;

export default AppRouter;
