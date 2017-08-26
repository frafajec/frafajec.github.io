import React from 'react';
import PropTypes from 'prop-types';

import Ficon from '../Ficon';

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
    const iconStyle = {
      paddingTop: 20,
      cursor: 'pointer',
    };

    return (
      <div styleName="Jumbotron" style={style}>
        <div styleName="text-container">
          <h1>Filip Rafajec</h1>
          <p>Web developer</p>
        </div>
        <div styleName="overlay-container" />
        <a styleName="scroll-down">
          <Ficon name="chevron-down" width={50} height={40} style={iconStyle} />
        </a>
      </div>
    );
  }
}
Jumbotron.propTypes = JumbotronProps;
