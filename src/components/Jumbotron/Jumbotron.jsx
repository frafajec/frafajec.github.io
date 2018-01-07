import React from 'react';
import PropTypes from 'prop-types';

import Ficon from '../Ficon';

import video from '../../assets/video';

import './Jumbotron.scssm';

// ------------------------------------------------------------------------------------------------
const JumbotronProps = {
  height: PropTypes.number.isRequired,
  mainText: PropTypes.string,
  subText: PropTypes.string,
  scrollDown: PropTypes.func,
  onLoad: PropTypes.func,
};

const JumbotronDefaultProps = {
  mainText: '',
  subText: '',
  scrollDown: null,
  onLoad: null,
};

export default class Jumbotron extends React.Component {
  constructor(props) {
    super(props);

    this.videoRef = null;
  }

  componentDidMount() {
    this.videoRef.addEventListener('loadeddata', this.props.onLoad, false);
  }

  render() {
    const setRef = ref => {
      this.videoRef = ref;
    };

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
          <h1>{this.props.mainText}</h1>
          <p>{this.props.subText}</p>
        </div>

        <div styleName="overlay-container">
          <video loop muted autoPlay poster={video.videoPreview} ref={setRef}>
            <source src={video.videoWebm} type="video/webm" />
            <source src={video.videoMp4} type="video/mp4" />
            <source src={video.videoOgv} type="video/ogv" />
          </video>
        </div>

        <button styleName="scroll-down" onClick={this.props.scrollDown}>
          <Ficon name="chevron-down" width={50} height={40} style={iconStyle} />
        </button>
      </div>
    );
  }
}
Jumbotron.propTypes = JumbotronProps;
Jumbotron.defaultProps = JumbotronDefaultProps;
