import React from 'react';
import PropTypes from 'prop-types';

import { partial } from '../../utils/helpers';
import urls from '../../constants/urls';

import TermsPopup from './Popups/Terms';
import PrivacyPopup from './Popups/Privacy';
import Ficon from '../Ficon';

import './Footer.scssm';

const POPUPS = {
  TERMS: 'terms',
  PRIVACY: 'privacy',
};

// ------------------------------------------------------------------------------------------------
function FooterSocial() {
  return (
    <div styleName="content">
      <ul styleName="social-networks">
        <li>
          <a href={urls.LINKEDIN} target="_blank" rel="noopener noreferrer">
            <Ficon name="linkedin" width={40} height={40} />
          </a>
        </li>
        <li>
          <a href={urls.GITHUB} target="_blank" rel="noopener noreferrer">
            <Ficon name="github" width={40} height={40} />
          </a>
        </li>
        <li>
          <a href={urls.MEDIUM} target="_blank" rel="noopener noreferrer">
            <Ficon name="medium" width={40} height={40} />
          </a>
        </li>
        <li>
          <a href={`mailto:${urls.EMAIL}`} target="_blank" rel="noopener noreferrer">
            <Ficon name="envelope" width={40} height={40} />
          </a>
        </li>
      </ul>
    </div>
  );
}

// ------------------------------------------------------------------------------------------------
function TopFooter({ togglePopup }) {
  return (
    <div styleName="top-footer">
      <ul styleName="links">
        <li>
          <span onClick={partial(togglePopup, POPUPS.PRIVACY)}>Privacy</span>
        </li>
        <li>
          <span onClick={partial(togglePopup, POPUPS.TERMS)}>Terms</span>
        </li>
      </ul>
      <ul styleName="menu">
        <li>{/* <Link path={routes.HOME} label={'Home'} /> */}</li>
        <li>{/* <Link path={routes.PROJECTS} label={'Projects'} /> */}</li>
        <li>{/* <Link path={routes.CONTACT} label={'Contact'} /> */}</li>
      </ul>
    </div>
  );
}
TopFooter.propTypes = {
  togglePopup: PropTypes.func.isRequired,
};

// ------------------------------------------------------------------------------------------------
function BottomFooter() {
  return (
    <div styleName="bottom-footer">
      <nav styleName="nav">
        <ul>
          <li>
            Send me{' '}
            <a href="#" target="_blank">
              e-mail
            </a>
          </li>
          <li>
            Check my{' '}
            <a href={urls.LINKEDIN} target="_blank">
              linkedin
            </a>
          </li>
          <li>
            Read me on{' '}
            <a href="#" target="_blank">
              medium
            </a>
          </li>
        </ul>
      </nav>
      <span styleName="copyright">Filip Rafajec © {new Date().getFullYear()}</span>
    </div>
  );
}

// ------------------------------------------------------------------------------------------------
const FooterProps = {
  social: PropTypes.bool,
};
const FooterDefaultProps = {
  social: true,
};

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      [POPUPS.TERMS]: false,
      [POPUPS.PRIVACY]: false,
    };

    this.togglePopup = this.togglePopup.bind(this);
  }

  togglePopup(popup) {
    this.setState({
      [popup]: !this.state[popup],
    });
  }

  render() {
    const { social } = this.props;
    const { terms, privacy } = this.state;

    return (
      <div styleName="Footer">
        {social ? <FooterSocial /> : null}

        <div className="container">
          <TermsPopup togglePopup={partial(this.togglePopup, POPUPS.TERMS)} visible={terms} />
          <PrivacyPopup togglePopup={partial(this.togglePopup, POPUPS.PRIVACY)} visible={privacy} />

          <TopFooter togglePopup={this.togglePopup} />
          <BottomFooter />
        </div>
      </div>
    );
  }
}
Footer.propTypes = FooterProps;
Footer.defaultProps = FooterDefaultProps;

export default Footer;
