import React from 'react';
import PropTypes from 'prop-types';

import PersonalImage from '../../../assets/personal-image.jpg';

import './Profile.scssm';

// ------------------------------------------------------------------------------------------------
const ProfileProps = {};

export default function Profile() {
  return (
    <div styleName="Profile">
      <h2>Profile</h2>
      <p>Hello there!</p>

      <hr />

      <div styleName="content">
        <div styleName="about">
          <h3>About me</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultrices lorem quis cursus euismod.
            Suspendisse potenti. Maecenas non metus elementum, convallis ex non, lacinia lorem. Mauris ligula ipsum,
            pretium nec turpis vitae, sodales fringilla mi. Nam non lobortis urna. Sed facilisis euismod eros non
            scelerisque.{' '}
          </p>
        </div>
        <div styleName="image">
          <img src={PersonalImage} alt="Personal" />
        </div>
        <div styleName="details">
          <h3>Details</h3>
          <p>
            <strong>Name</strong>
            <span>Filip Rafajec</span>
            <strong>Age</strong>
            <span>25</span>
            <strong>Location</strong>
            <span>Graz, Austria</span>
          </p>
        </div>
      </div>
    </div>
  );
}
Profile.propTypes = ProfileProps;
