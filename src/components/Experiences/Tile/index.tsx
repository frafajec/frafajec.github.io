import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import styles from './styles';

// ------------------------------------------------------------
interface ITileProps extends WithStyles<typeof styles> {
  readonly date: string;
  readonly desc: string;
  readonly location: string;
  readonly name: string;
  readonly title: string;
  readonly url?: string;
}
interface ITileState {}

// ------------------------------------------------------------
class Tile extends React.Component<ITileProps, ITileState> {
  renderLocation = () => {
    const { classes, location } = this.props;

    return (
      <div className={classes.location}>
        <i className={classes.icons + ' fas fa-map-marker-alt'} />
        <span className={classes.urlText}>{location}</span>
      </div>
    );
  };

  renderUrl = () => {
    const { classes, url } = this.props;

    return (
      <Button href={url} target="_blank" className={classes.url}>
        <i className={classes.icons + ' fas fa-link'} />
        <span className={classes.urlText}>{url}</span>
      </Button>
    );
  };

  render() {
    const { classes, date, desc, location, name, title, url } = this.props;

    const renderLocation = location ? this.renderLocation() : null;
    const renderUrl = url ? this.renderUrl() : null;

    return (
      <Grid container className={classes.tile}>
        <Grid item className={classes.tileChrono}>
          <span className={classes.name}>{name}</span>
          <span className={classes.date}>{date}</span>
        </Grid>
        <Grid item className={classes.tileAbout}>
          <span className={classes.title}>{title}</span>
          <span className={classes.desc}>{desc}</span>
          <div className={classes.additional}>
            {renderLocation}
            {renderUrl}
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Tile);
