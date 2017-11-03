import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import actions from '../../actions';
import scrollComponents from './constants';

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
  return {
    scrollTo: location => dispatch(actions.scrollTo(location)),
    setJumbotronLoaded: () => dispatch(actions.setJumbotronLoaded()),
  };
}

// ------------------------------------------------------------------------------------------------
const HomepageProps = {
  browser: PropTypes.object.isRequired,
  scrollTo: PropTypes.func.isRequired,
  setJumbotronLoaded: PropTypes.func.isRequired,
};

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.scrollToHome = this.scrollToHome.bind(this);
  }

  scrollToHome() {
    this.props.scrollTo(scrollComponents.homeContainer);
  }

  render() {
    const jumbotronProps = {
      height: this.props.browser.height,
      mainText: 'Filip Rafajec',
      scrollDown: this.scrollToHome,
      subText: 'Web developer',
      onLoad: this.props.setJumbotronLoaded,
    };

    return (
      <div styleName="Home" id={scrollComponents.homeTop}>
        <Nav />
        <Jumbotron {...jumbotronProps} />
        <div id={scrollComponents.homeContainer} styleName="homeContainer">
          <Profile id={scrollComponents.homeProfile} />
          <Contact id={scrollComponents.homeContact} />
          <Experiences id={scrollComponents.homeExperiences} />
          <Abilities id={scrollComponents.homeAbilities} />
          <Projects id={scrollComponents.homeProjects} />
        </div>
        <Footer />
      </div>
    );
  }
}
Homepage.propTypes = HomepageProps;

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
