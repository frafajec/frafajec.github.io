import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { urls } from 'core/constants';
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
              quote={'Catch me - anytime, anywhere'}
              withUnderline={false}
            />
            <div className={classes.row}>
              <Button href={urls.LINKEDIN} target="_blank" className={classes.navLink}>
                <i className={classes.icons + ' fab fa-linkedin'} />
                <span className={classes.navLinkText}>{urls.LINKEDIN}</span>
              </Button>
              <Button href={`mailto:${urls.EMAIL}`} className={classes.navLink}>
                <i className={classes.icons + ' fas fa-envelope'} />
                <span className={classes.navLinkText}>{urls.EMAIL}</span>
              </Button>
              <Button href={urls.GITHUB} target="_blank" className={classes.navLink}>
                <i className={classes.icons + ' fab fa-github'} />
                <span className={classes.navLinkText}>{urls.GITHUB}</span>
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Contact);
