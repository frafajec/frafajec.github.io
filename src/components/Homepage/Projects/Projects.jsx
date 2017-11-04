import React from 'react';

import ProjectTile from './ProjectTile';

import villaSol from '../../../assets/images/villaSol.jpg';
import alarmMe from '../../../assets/images/alarmMe.jpg';
import crobitcoin from '../../../assets/images/crobitcoin.jpg';

import './Projects.scssm';

// ------------------------------------------------------------------------------------------------
const ProjectsProps = {};

export default function Projects() {
  return (
    <div styleName="Projects" className="homepage-page">
      <h2>Projects</h2>
      <p>Hello there!</p>

      <hr />

      <div styleName="content">
        <ProjectTile
          title="Villa Sol"
          desc="Perfect vacationing on Croatian coast"
          img={villaSol}
          url={'https://goo.gl/AmGFLR'}
        />
        <ProjectTile
          title="AlarmMe!"
          desc="Chrome extension to help you track time and events"
          img={alarmMe}
          url={'https://goo.gl/9M9oFd'}
        />
        <ProjectTile
          title="CroBitcoin"
          desc="Portal for news and how-to on crypto-currencies"
          img={crobitcoin}
          url={'https://goo.gl/DnmpJY'}
        />
      </div>
    </div>
  );
}

Projects.propTypes = ProjectsProps;
