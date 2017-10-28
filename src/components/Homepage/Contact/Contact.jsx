import React from 'react';
import PropTypes from 'prop-types';

import urls from '../../../constants/urls';
import Ficon from '../../Ficon';

import './Contact.scssm';

// ------------------------------------------------------------------------------------------------
const ContactProps = {
  id: PropTypes.string.isRequired,
};

export default function Contact({ id }) {
  return (
    <div styleName="Contact" id={id}>
      <h2>Contact</h2>
      <p>Catch me - anytime, anywhere</p>

      <div styleName="content">
        <a styleName="action" href={urls.LINKEDIN} target="_blank" rel="noopener noreferrer">
          <div styleName="icon">
            <Ficon name="linkedin-square" height={23} width={30} />
          </div>
          <span styleName="text">{urls.LINKEDIN}</span>
        </a>
        <a styleName="action" href={`mailto:${urls.EMAIL}`} target="_blank" rel="noopener noreferrer">
          <div styleName="icon">
            <Ficon name="envelope" height={23} width={30} />
          </div>
          <span styleName="text">{urls.EMAIL}</span>
        </a>
        <a styleName="action" href={urls.GITHUB} target="_blank" rel="noopener noreferrer">
          <div styleName="icon">
            <Ficon name="github-alt" height={23} width={30} />
          </div>
          <span styleName="text">{urls.GITHUB}</span>
        </a>
      </div>
    </div>
  );
}
Contact.propTypes = ContactProps;
