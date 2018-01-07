import React from 'react';
import PropTypes from 'prop-types';

import './Section.scssm';

// ------------------------------------------------------------------------------------------------
const SectionProps = {
  children: PropTypes.array,
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

const SectionDefaults = {
  children: [],
  title: '',
  subTitle: '',
};

export default function Section({ title, subTitle, children }) {
  const renderTitle =
    title.length > 0
      ? <h2>
          {title}
        </h2>
      : null;
  const renderSubTitle =
    subTitle.length > 0
      ? <h3>
          {subTitle}
        </h3>
      : null;

  return (
    <div styleName="Section">
      {renderTitle}
      {renderSubTitle}
      <div styleName="section-content">
        {children}
      </div>
    </div>
  );
}
Section.propTypes = SectionProps;
Section.defaultProps = SectionDefaults;
