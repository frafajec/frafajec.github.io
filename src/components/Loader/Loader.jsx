import React from 'react';
import PropTypes from 'prop-types';

import './Loader.scssm';

// ------------------------------------------------------------------------------------------------
const LoaderProps = {
  loaded: PropTypes.bool.isRequired,
};

export default class Loader extends React.Component {
  render() {
    const style = {
      opacity: this.props.loaded ? 0 : 1,
    };

    return (
      <div styleName="loader-wrapper" style={style}>
        <div styleName="sk-fading-circle">
          <div styleName="sk-circle1 sk-circle" />
          <div styleName="sk-circle2 sk-circle" />
          <div styleName="sk-circle3 sk-circle" />
          <div styleName="sk-circle4 sk-circle" />
          <div styleName="sk-circle5 sk-circle" />
          <div styleName="sk-circle6 sk-circle" />
          <div styleName="sk-circle7 sk-circle" />
          <div styleName="sk-circle8 sk-circle" />
          <div styleName="sk-circle9 sk-circle" />
          <div styleName="sk-circle10 sk-circle" />
          <div styleName="sk-circle11 sk-circle" />
          <div styleName="sk-circle12 sk-circle" />
        </div>
      </div>
    );
  }
}
Loader.propTypes = LoaderProps;
