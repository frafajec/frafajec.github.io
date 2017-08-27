import React from 'react';
import { Route } from 'react-router-dom';

import { routes } from '../../router';

import Projects from './Projects';

import './Projects.scssm';

// ------------------------------------------------------------------------------------------------
const ProjectRouterProps = {};

export default function ProjectsRouter() {
  return (
    <div>
      <Route path={routes.PROJECTS} exact component={Projects} />
      <Route path={routes.PROJECT_ID} component={Projects} />
    </div>
  );
}
ProjectsRouter.propTypes = ProjectRouterProps;
