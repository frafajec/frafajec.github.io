import React from 'react';
import PropTypes from 'prop-types';

import './Experiences.scssm';

// ------------------------------------------------------------------------------------------------
const SectionProps = {
  children: PropTypes.array,
  title: PropTypes.string,
};

const SectionDefaults = {
  children: [],
  title: '',
};

export default function Section({ title, children }) {
  return (
    <div styleName="Section">
      <h2>
        {title}
      </h2>
      <div styleName="section-content">
        {children}
      </div>
    </div>
  );
}
Section.propTypes = SectionProps;
Section.defaultProps = SectionDefaults;
