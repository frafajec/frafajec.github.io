import React from 'react';
import PropTypes from 'prop-types';

import './Projects.scssm';

// ------------------------------------------------------------------------------------------------
const ProjectsProps = {};

export default function Projects() {
  return (
    <div styleName="Projects">
      <h2>Projects</h2>
      <p>Hello there!</p>

      <hr />

      <div styleName="content" />
    </div>
  );
}
Projects.propTypes = ProjectsProps;
