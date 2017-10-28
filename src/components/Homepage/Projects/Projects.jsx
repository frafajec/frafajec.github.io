import React from 'react';
import PropTypes from 'prop-types';

import './Projects.scssm';

// ------------------------------------------------------------------------------------------------
const ProjectsProps = {
  id: PropTypes.string.isRequired,
};

export default function Projects({ id }) {
  return (
    <div styleName="Projects" id={id}>
      <h2>Projects</h2>
      <p>Hello there!</p>

      <hr />

      <div styleName="content" />
    </div>
  );
}

Projects.propTypes = ProjectsProps;
