import React from 'react';
import PropTypes from 'prop-types';

import urls from '../../constants/urls';

import Ficon from '../Ficon';

import './Footer.scssm';

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
function TopFooter() {
  return (
    <div styleName="top-footer">
      <ul styleName="links">
        <li>
          <a href="">Privacy</a>
        </li>
        <li>
          <a href="">Terms</a>
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
  render() {
    const { social } = this.props;

    return (
      <div styleName="Footer">
        {social ? <FooterSocial /> : null}

        <div className="container">
          <TopFooter />
          <BottomFooter />
        </div>
      </div>
    );
  }
}
Footer.propTypes = FooterProps;
Footer.defaultProps = FooterDefaultProps;

export default Footer;
