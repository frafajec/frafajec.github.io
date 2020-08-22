import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';

import pi480 from 'assets/pi/pi480.jpg';
import pi768 from 'assets/pi/pi768.jpg';
import pi1024 from 'assets/pi/pi1024.jpg';
import pi1200 from 'assets/pi/pi1200.jpg';

import styles from './styles';

// ------------------------------------------------------------
interface IProfileOverviewProps extends WithStyles<typeof styles> {}

// ------------------------------------------------------------
class ProfileOverview extends React.Component<IProfileOverviewProps> {
  getAge() {
    const diff = (new Date() as any) - (new Date(1992, 9, 20) as any);
    const year = 1000 * 60 * 60 * 24 * 365;
    return Math.floor(diff / year);
  }

  render() {
    const { classes } = this.props;
    const srcSet = `${pi480} 480w,
                    ${pi768} 768w,
                    ${pi1024} 1024w,
                    ${pi1200} 1200w`;
    const sizes = `190px`; // image size, restricts what browser will load

    return (
      <div className={classes.overview}>
        <Hidden smDown>
          <div className={classes.details}>
            <strong className={classes.detailsHeader}>Name</strong>
            <span className={classes.detailsDesc}>Filip Rafajec</span>
            <strong className={classes.detailsHeader}>Age</strong>
            <span className={classes.detailsDesc}>{this.getAge()}</span>
            <strong className={classes.detailsHeader}>Location</strong>
            <span className={classes.detailsDesc}>Graz, Austria</span>
          </div>
        </Hidden>
        <img
          id="profile-picture"
          className={classes.image}
          src={pi1200}
          srcSet={srcSet}
          sizes={sizes}
          alt="personal"
        />
      </div>
    );
  }
}

export default withStyles(styles)(ProfileOverview);
