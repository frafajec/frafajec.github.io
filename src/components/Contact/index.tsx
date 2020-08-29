import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { urls } from 'core/constants';
import GA from 'core/ga';
import Header from 'components/Header';

import styles from './styles';

// ------------------------------------------------------------
interface IContactProps extends WithStyles<typeof styles> {
  readonly id: string;
}
interface IContactState {}

// ------------------------------------------------------------
class Contact extends React.Component<IContactProps, IContactState> {
  render() {
    const { classes, id } = this.props;
    return (
      <div id={id} className={classes.container}>
        <Grid container className={classes.gridContainer}>
          <Grid item className={classes.gridItem}>
            <Header
              title={'Contact'}
              quote={'“Failure is the condiment that gives success its flavor.” ― Truman Capote'}
              withUnderline={false}
            />
            <div className={classes.row}>
              <Button
                href={`mailto:${urls.EMAIL}`}
                onClick={GA.openEmail}
                className={classes.navLink}
              >
                <i className={classes.icons + ' fas fa-envelope'} />
                <span className={classes.navLinkText}>{urls.EMAIL}</span>
              </Button>
              <Button
                href={urls.LINKEDIN}
                rel="noreferrer"
                target="_blank"
                onClick={GA.openLinkedin}
                className={classes.navLink}
              >
                <i className={classes.icons + ' fab fa-linkedin'} />
                <span className={classes.navLinkText}>/in/frafajec</span>
              </Button>
              <Button
                href={urls.GITHUB}
                rel="noreferrer"
                target="_blank"
                onClick={GA.openGithub}
                className={classes.navLink}
              >
                <i className={classes.icons + ' fab fa-github'} />
                <span className={classes.navLinkText}>frafajec</span>
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Contact);
