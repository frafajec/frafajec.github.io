import React from 'react';
import PropTypes from 'prop-types';

import './Contact.scssm';

// ------------------------------------------------------------------------------------------------
const ContactProps = {};

export default function Contact() {
  return (
    <div styleName="Contact">
      <h2>Contact</h2>
      <p>Hello there!</p>

      <hr />

      <div styleName="content" />
    </div>
  );
}
Contact.propTypes = ContactProps;
