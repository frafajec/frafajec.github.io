import React from 'react';
import PropTypes from 'prop-types';

import Ficon from '../../Ficon';

import './Experiences.scssm';

// ------------------------------------------------------------------------------------------------
const componentProp = {
  content: PropTypes.any.isRequired,
};

const LocationComponent = ({ content }) =>
  <div styleName="location">
    <Ficon name="map-marker" />
    <span>
      {content}
    </span>
  </div>;
LocationComponent.propTypes = componentProp;

const UrlComponent = ({ content }) =>
  <div styleName="url">
    <Ficon name="link" height={17} />
    <a href={content} target="_blank">
      {content}
    </a>
  </div>;
UrlComponent.propTypes = componentProp;

// ------------------------------------------------------------------------------------------------
const TileProps = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,

  location: PropTypes.string,
  url: PropTypes.string,
};

const TileDefaults = {
  location: null,
  url: null,
};

// ------------------------------------------------------------------------------------------------
export default function Tile({ name, date, title, desc, location, url }) {
  const renderLocation = location ? <LocationComponent content={location} /> : null;
  const renderUrl = url ? <UrlComponent content={url} /> : null;

  return (
    <div styleName="Tile">
      <div styleName="tile-chrono">
        <span styleName="name">
          {name}
        </span>
        <span styleName="date">
          {date}
        </span>
      </div>
      <div styleName="tile-about">
        <span styleName="title">
          {title}
        </span>
        <span styleName="desc">
          {desc}
        </span>
        <div styleName="additional">
          {renderLocation}
          {renderUrl}
        </div>
      </div>
    </div>
  );
}
Tile.propTypes = TileProps;
Tile.defaultProps = TileDefaults;
