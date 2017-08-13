import React from 'react';
import PropTypes from 'prop-types';

import './Jumbotron.scssm';

// ------------------------------------------------------------------------------------------------
const JumbotronProps = {
  height: PropTypes.number.isRequired,
};

export default class Jumbotron extends React.Component {
  render() {
    const style = {
      height: this.props.height,
    };

    return (
      <div styleName="Jumbotron" style={style}>
        <div styleName="text-container">
          <h1>Filip Rafajec</h1>
          <p>Web developer</p>
        </div>
        <div styleName="overlay-container" />
        <a styleName="scroll-down">
          <span className="glyphicon glyphicon-chevron-down" />
        </a>
      </div>
    );
  }
}
Jumbotron.propTypes = JumbotronProps;
