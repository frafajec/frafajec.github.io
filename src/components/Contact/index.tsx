import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

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
            body
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Contact);
