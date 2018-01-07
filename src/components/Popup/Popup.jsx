import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Ficon from '../Ficon';

import './Popup.scssm';

// ------------------------------------------------------------------------------------------------
export const PopupSize = {
  SMALL: 'small',
  NORMAL: 'normal',
  FULLSCREEN: 'fullscreen',
};

// ------------------------------------------------------------------------------------------------
const PopupProps = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.any,
  size: PropTypes.oneOf([PopupSize.SMALL, PopupSize.NORMAL, PopupSize.FULLSCREEN]),
};

const PopupDefaultProps = {
  children: null,
  size: PopupSize.NORMAL,
};

// ------------------------------------------------------------------------------------------------
export default function Popup({ title, children, size, onClose }) {
  const classes = cn('Popup', size);
  const closeStyle = {
    height: 50,
    width: 50,
    paddingTop: 25,
    paddingLeft: 20,
    cursor: 'pointer',
    fontSize: '2em',
  };

  return (
    <div styleName="PopupContainer">
      <div styleName="shadow" />
      <div styleName={classes}>
        <div styleName="title">
          <h2>{title}</h2>
          <div styleName="closeIcon" onClick={onClose}>
            <Ficon name="close" width={50} height={50} style={closeStyle} />
          </div>
          <hr />
        </div>
        <div styleName="container">{children}</div>
      </div>
    </div>
  );
}
Popup.propTypes = PopupProps;
Popup.defaultProps = PopupDefaultProps;
