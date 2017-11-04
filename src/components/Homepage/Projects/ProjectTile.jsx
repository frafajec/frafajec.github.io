import React from 'react';
import PropTypes from 'prop-types';

import Ficon from '../../Ficon';

import './Projects.scssm';

// ------------------------------------------------------------------------------------------------
const ProjectTileProps = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default function ProjectTile({ title, desc, img, url }) {
  return (
    <div styleName="Project-tile">
      <div styleName="wrapper">
        <a styleName="external" href={url} target="_blank">
          <Ficon name="external-link" />
        </a>
        <div styleName="content">
          <div styleName="text">
            <span styleName="title">{title}</span>
            <hr />
            <span styleName="desc">{desc}</span>
          </div>
          <img src={img} alt={title} />
        </div>
      </div>
    </div>
  );
}

ProjectTile.propTypes = ProjectTileProps;
