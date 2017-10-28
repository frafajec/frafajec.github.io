import React from 'react';

import PersonalImage from '../../../assets/personal-image.jpg';

import './Profile.scssm';

// ------------------------------------------------------------------------------------------------
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
            I am a young mind with goals set high and ambition to accomplish them even higher. Through all my life I
            have been both pushed and pull by people around me who have realized my worth to them, to project in which I
            took part and to teams of people in general. So far I have achieved a lot, but I can and I will achieve more
            in time to come.
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
