import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import Header from 'components/Header';
import Overview from './Overview';

import styles from './styles';

// ------------------------------------------------------------
interface IProfileProps extends WithStyles<typeof styles> {
  readonly id: string;
}

// ------------------------------------------------------------
class Profile extends React.Component<IProfileProps> {
  getAge() {
    const diff = (new Date() as any) - (new Date(1992, 9, 20) as any);
    const year = 1000 * 60 * 60 * 24 * 365;
    return Math.floor(diff / year);
  }

  render() {
    const { classes, id } = this.props;

    return (
      <div id={id} className={classes.container}>
        <Grid container className={classes.gridContainer}>
          <Grid item className={classes.gridItem}>
            <Header
              title={'Profile'}
              quote={'”We become what we think about.” - Earl Nightingale'}
              withUnderline={false}
            />
            <Grid container className={classes.gridContainer}>
              <Grid item className={classes.gridItemContent}>
                <Overview />
              </Grid>
              <Grid item className={classes.gridItemContent}>
                <div className={classes.about}>
                  <h3 className={classes.title}>About me</h3>
                  <p className={classes.description}>
                    Hi! Im Filip and at the moment I am a team coordinator and technical consultant!
                    Currently, I am focusing on my technical skills in web domain and getting better
                    in leading a company, its teams and driving technical excellence forward.
                    <br />
                    <br /> My primary specialization is Software development with all its charms -
                    conceptualizing, planning, executing and consulting along the way.
                    <br />
                    <br /> My focus is driving teams and motivating people to do their best in both
                    personal and professional aspects. If you have more interests don't hesitate to
                    reach out!
                    <br />
                    <br /> For more info Ill be happy to chat and share!
                  </p>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Profile);
