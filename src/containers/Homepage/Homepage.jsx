import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import actions from '../../actions';

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Jumbotron from '../../components/Jumbotron';

import './Homepage.scssm';

// ------------------------------------------------------------------------------------------------
function mapStateToProps(state) {
  return {
    browser: state.app.browser,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

// ------------------------------------------------------------------------------------------------
const HomepageProps = {
  browser: PropTypes.object.isRequired,
};

class Homepage extends React.Component {
  render() {
    return (
      <div styleName="Home">
        <Jumbotron height={this.props.browser.height} mainText={'Filip Rafajec'} subText={'Web developer'} />
        <Nav />
        <div styleName="Home-container">Homepage!</div>
        <Footer />
      </div>
    );
  }
}
Homepage.propTypes = HomepageProps;

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Homepage));
