import React from 'react';
import PropTypes from 'prop-types';

import './Abilities.scssm';

// ------------------------------------------------------------------------------------------------
const AbilitiesProps = {};

export default function Abilities() {
  return (
    <div styleName="Abilities">
      <h2>Abilities</h2>
      <p>Hello there!</p>

      <hr />

      <div styleName="content" />
    </div>
  );
}
Abilities.propTypes = AbilitiesProps;
