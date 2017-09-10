import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { scroller } from 'react-scroll';

import actions from '../../actions';

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Jumbotron from '../../components/Jumbotron';
import { Abilities, Contact, Experiences, Profile, Projects } from '../../components/Homepage';

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
    const scrollToHome = () => {
      scroller.scrollTo('homeContainer', { smooth: true, duration: 800 });
    };
    const jumbotronProps = {
      height: this.props.browser.height,
      mainText: 'Filip Rafajec',
      scrollDown: scrollToHome,
      subText: 'Web developer',
    };

    return (
      <div styleName="Home">
        {/* <Nav /> */}
        <Jumbotron {...jumbotronProps} />
        <div id="homeContainer">
          <Profile />
          <Experiences />
          <Abilities />
          <Projects />
          <Contact />
        </div>
        <Footer />
      </div>
    );
  }
}
Homepage.propTypes = HomepageProps;

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Homepage));
