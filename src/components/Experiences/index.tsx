import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import Header from 'components/Header';

import styles from './styles';

// ------------------------------------------------------------
interface IExperiencesProps extends WithStyles<typeof styles> {
  readonly id: string;
}
interface IExperiencesState {}

// ------------------------------------------------------------
class Experiences extends React.Component<IExperiencesProps, IExperiencesState> {
  render() {
    const { classes, id } = this.props;
    return (
      <div id={id} className={classes.container}>
        <Grid container className={classes.gridContainer}>
          <Grid item className={classes.gridItem}>
            <Header
              title={'Experiences'}
              quote={'“Failure is the condiment that gives success its flavor.” ― Truman Capote'}
            />
            body
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Experiences);
