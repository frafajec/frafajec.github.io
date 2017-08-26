import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import actions from '../../actions';
import { Link, routes } from '../../router';

import './Footer.scssm';

// ------------------------------------------------------------------------------------------------
function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

// ------------------------------------------------------------------------------------------------
const FooterProps = {};

class Footer extends React.Component {
  render() {
    return (
      <div styleName="Footer">
        <div styleName="content">
          <ul styleName="social-networks">
            <li>
              <a href="#">Icon</a>
            </li>
            <li>
              <a href="#">222</a>
            </li>
          </ul>
        </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Footer));
