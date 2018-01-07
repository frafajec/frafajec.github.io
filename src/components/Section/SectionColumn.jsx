import React from 'react';
import PropTypes from 'prop-types';

import './Section.scssm';

// ------------------------------------------------------------------------------------------------
const sectionColumnProps = {
  children: PropTypes.array,
};

const sectionColumnDefaults = {
  children: [],
};

export default function SectionColumn({ children }) {
  return (
    <div styleName="SectionColumn">
      {children}
    </div>
  );
}
SectionColumn.propTypes = sectionColumnProps;
SectionColumn.defaultProps = sectionColumnDefaults;
