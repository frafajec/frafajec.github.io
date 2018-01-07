import React from 'react';
import PropTypes from 'prop-types';

import PersonalImage from '../../../assets/personal-image.jpg';

import './Profile.scssm';

// ------------------------------------------------------------------------------------------------
const ProfileProps = {
  id: PropTypes.string.isRequired,
};

export default function Profile({ id }) {
  const diffYears = (dt2, dt1) => {
    const diff = (dt2.getTime() - dt1.getTime()) / 1000;
    return Math.abs(Math.round(diff / (60 * 60 * 24) / 365.25));
  };

  return (
    <div styleName="Profile" id={id} className="homepage-page">
      <h2>Profile</h2>
      <p>”We become what we think about.” - Earl Nightingale</p>

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
            <span>{diffYears(new Date(), new Date(1992, 9, 20))}</span>
            <strong>Location</strong>
            <span>Graz, Austria</span>
          </p>
        </div>
      </div>
    </div>
  );
}
Profile.propTypes = ProfileProps;
