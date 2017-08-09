import React from 'react';
import { Route } from 'react-router-dom';

import Projects from './Projects';

import './Projects.scssm';

// ------------------------------------------------------------------------------------------------
const ProjectRouterProps = {};

export default function ProjectsRouter() {
  return (
    <div styleName="Projects-layout">
      <Route path="/projects" exact component={Projects} />
      <Route path="/projects/:projectId" component={Projects} />
    </div>
  );
}
ProjectsRouter.propTypes = ProjectRouterProps;
