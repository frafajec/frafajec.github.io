import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';

import Nav from 'components/Nav';
import Parallax from 'components/Parallax';
import Footer from 'components/Footer';

import Profile from 'components/Profile';
import Contact from 'components/Contact';
import Experiences from 'components/Experiences';

import { scrollTo } from 'core/constants';

import styles from './styles';

// ------------------------------------------------------------
interface IAppProps extends WithStyles<typeof styles> {}
interface IAppState {}

// ------------------------------------------------------------
class App extends React.Component<IAppProps, IAppState> {
  render() {
    const { classes } = this.props;

    return (
      <div id={scrollTo.top} className={classes.app}>
        <Nav />
        <Parallax />
        <div className={classes.mainSection}>
          <Contact id={scrollTo.contact} />
          <hr className={classes.underline} />
          <Profile id={scrollTo.profile} />
          <Experiences id={scrollTo.experiences} />
        </div>
        <Footer />
      </div>
    );
  }
}

// ------------------------------------------------------------
export default withStyles(styles)(App);