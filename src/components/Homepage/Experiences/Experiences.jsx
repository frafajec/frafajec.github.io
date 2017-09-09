import React from 'react';
import PropTypes from 'prop-types';

import './Experiences.scssm';

// ------------------------------------------------------------------------------------------------
const ExperiencesProps = {};

export default function Experiences() {
  return (
    <div styleName="Experiences">
      <h2>Experiences</h2>
      <p>Hello there!</p>

      <hr />

      <div styleName="content" />
    </div>
  );
}
Experiences.propTypes = ExperiencesProps;
