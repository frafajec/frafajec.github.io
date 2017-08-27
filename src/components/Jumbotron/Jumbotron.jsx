import React from 'react';
import PropTypes from 'prop-types';

import Ficon from '../Ficon';

import './Jumbotron.scssm';

// ------------------------------------------------------------------------------------------------
const JumbotronProps = {
  height: PropTypes.number.isRequired,
  mainText: PropTypes.string,
  subText: PropTypes.string,
  scrollDown: PropTypes.func,
};

const JumbotronDefaultProps = {
  mainText: '',
  subText: '',
  scrollDown: null,
};

export default class Jumbotron extends React.Component {
  render() {
    const style = {
      height: this.props.height,
    };
    const iconStyle = {
      paddingTop: 15,
      cursor: 'pointer',
    };

    return (
      <div styleName="Jumbotron" style={style}>
        <div styleName="text-container">
          <h1>
            {this.props.mainText}
          </h1>
          <p>
            {this.props.subText}
          </p>
        </div>
        <div styleName="overlay-container" />
        <button styleName="scroll-down" onClick={this.props.scrollDown}>
          <Ficon name="chevron-down" width={50} height={40} style={iconStyle} />
        </button>
      </div>
    );
  }
}
Jumbotron.propTypes = JumbotronProps;
Jumbotron.defaultProps = JumbotronDefaultProps;
