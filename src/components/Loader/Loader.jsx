import React from 'react';
import PropTypes from 'prop-types';

import './Loader.scssm';

// ------------------------------------------------------------------------------------------------
const LoaderProps = {};

export default class Loader extends React.Component {
  render() {
    return <div styleName="Fullscreen-loader">some nice spin or something</div>;
  }
}
Loader.propTypes = LoaderProps;
