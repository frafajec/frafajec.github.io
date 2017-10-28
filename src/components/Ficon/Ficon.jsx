import React from 'react';
import PropTypes from 'prop-types';

// ------------------------------------------------------------------------------------------------
const FiconProps = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  style: PropTypes.object,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

const FiconDefaultProps = {
  width: 20,
  height: 20,
  size: 1,
  style: {},
  className: '',
  onClick: null,
};

const FiconSizes = {
  1: 'fa-lg',
  2: 'fa-2x',
  3: 'fa-3x',
  4: 'fa-4x',
  5: 'fa-5x',
};

export default function Ficon({ name, size, width, height, style, className, onClick }) {
  const componentStyle = {
    height,
    width,
    ...style,
  };

  return (
    <i
      className={`fa fa-${name} ${FiconSizes[size]} ${className}`}
      style={componentStyle}
      onClick={onClick}
      aria-hidden="true"
    />
  );
}
Ficon.propTypes = FiconProps;
Ficon.defaultProps = FiconDefaultProps;
