import React from 'react';
import PropTypes from 'prop-types';

import Ficon from '../../Ficon';

import './Abilities.scssm';

// ------------------------------------------------------------------------------------------------
const starsProps = {
  count: PropTypes.number.isRequired,
};

function StarsList({ count }) {
  const stars = [];

  for (let i = 0; i < 5; i += 1) {
    if (i < count) {
      stars.push(
        <div key={i} styleName="star">
          <Ficon name="star" width={20} height={20} />
        </div>
      );
    } else {
      stars.push(
        <div key={i} styleName="star">
          <Ficon name="star-o" width={20} height={20} />
        </div>
      );
    }
  }

  return <div styleName="StarsList">{stars}</div>;
}
StarsList.propTypes = starsProps;

// ------------------------------------------------------------------------------------------------
const starRatingProps = {
  text: PropTypes.string,
  rating: PropTypes.number,
};

const starRatingDefaults = {
  text: '',
  rating: 0,
};

export default function StarRating({ text, rating }) {
  return (
    <div styleName="StarContainer">
      <span styleName="text">{text}</span>
      <span styleName="stars">
        <StarsList count={rating} />
      </span>
    </div>
  );
}
StarRating.propTypes = starRatingProps;
StarRating.defaultProps = starRatingDefaults;
