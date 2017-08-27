import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import actions from '../../actions';
import { Link, routes } from '../../router';
import urls from '../../constants/urls';

import Ficon from '../Ficon';

import './Footer.scssm';

// ------------------------------------------------------------------------------------------------
const FooterSocialProps = {};

function FooterSocial() {
  return (
    <div styleName="content">
      <ul styleName="social-networks">
        <li>
          <a href={urls.LINKEDIN} target="_blank">
            <Ficon name="linkedin" width={40} height={40} />
          </a>
        </li>
        <li>
          <a href={urls.GITHUB} target="_blank">
            <Ficon name="github" width={40} height={40} />
          </a>
        </li>
        <li>
          <a href={urls.MEDIUM} target="_blank">
            <Ficon name="medium" width={40} height={40} />
          </a>
        </li>
      </ul>
    </div>
  );
}
FooterSocial.propTypes = FooterSocialProps;

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
          <div styleName="navigation">
            <ul styleName="links">
              <li>
                <a href="">Privacy</a>
              </li>
              <li>
                <a href="">Terms</a>
              </li>
            </ul>
            <ul styleName="menu">
              <li>
                <Link path={routes.HOME} label={'Home'} />
              </li>
              <li>
                <Link path={routes.PROJECTS} label={'Projects'} />
              </li>
              <li>
                <Link path={routes.ABOUT} label={'About'} />
              </li>
            </ul>
          </div>
          <div styleName="info">
            <nav styleName="nav">
              <ul>
                <li>
                  Send me <a href="#">e-mail</a>
                </li>
                <li>
                  Follow us on <a href="https://twitter.com/365daysinprint">twitter</a>
                </li>
                <li>
                  Like us on <a href="https://www.facebook.com/my365daysinprint">facebook</a>
                </li>
              </ul>
            </nav>
            <span styleName="copyright">
              Filip Rafajec © {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
Footer.propTypes = FooterProps;
Footer.defaultProps = FooterDefaultProps;

export default withRouter(Footer);
