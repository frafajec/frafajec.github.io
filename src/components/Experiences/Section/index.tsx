import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';

import styles from './styles';

// ------------------------------------------------------------
interface ISectionProps extends WithStyles<typeof styles> {
  readonly title: string;
}
interface ISectionState {}

// ------------------------------------------------------------
class Section extends React.Component<ISectionProps, ISectionState> {
  render() {
    const { children, classes, title } = this.props;
    return (
      <Grid container className={classes.container}>
        <Grid item>
          <h2 className={classes.title}>{title}</h2>
        </Grid>
        <Grid item>{children}</Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Section);
