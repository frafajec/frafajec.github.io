import * as React from 'react';
import cn from 'classnames';

import { withStyles, WithStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import ws320 from 'assets/hero/ws320.jpg';
import ws480 from 'assets/hero/ws480.jpg';
import ws768 from 'assets/hero/ws768.jpg';
import ws1024 from 'assets/hero/ws1024.jpg';
import ws1280 from 'assets/hero/ws1280.jpg';
import ws1366 from 'assets/hero/ws1366.jpg';
import ws1920 from 'assets/hero/ws1920.jpg';
import ws2600 from 'assets/hero/ws2600.jpg';

import styles from './styles';

// ------------------------------------------------------------
interface IParallaxProps extends WithStyles<typeof styles> {}
interface IParallaxState {
  readonly init: boolean;
  readonly loaded: boolean;
}

// ------------------------------------------------------------
class Parallax extends React.Component<IParallaxProps, IParallaxState> {
  constructor(props: IParallaxProps) {
    super(props);

    this.state = {
      init: false,
      loaded: false,
    };
  }

  onImageLoaded = () => {
    // resets scale for background and initiate parallax
    this.setState({
      init: true,
    });
    setTimeout(this.setLoaded, 1600);
  };

  setLoaded = () => {
    // after parallax animation - cleanup
    this.setState({ loaded: true });
  };

  render() {
    const { classes } = this.props;
    const { init, loaded } = this.state;

    const parallaxCls = cn(classes.parallax, {
      [classes.parallaxScale]: !loaded,
    });
    const brandCls = cn(classes.brand, { [classes.brandScale]: !init });
    const widthImages = [ws320, ws480, ws768, ws1024, ws1280, ws1366, ws1920, ws2600];
    const getClosest = (goal: number): string =>
      widthImages.reduce((prev: any, curr: any): string => {
        const p = prev ? parseInt(prev.match(/\/media\/ws(\d+)\./)[1]) : NaN;
        const c = parseInt(curr.match(/\/media\/ws(\d+)\./)[1]);
        return Math.abs(c - goal) < Math.abs(p - goal) ? curr : prev;
      });

    return (
      <div
        className={parallaxCls}
        ref={this.onImageLoaded}
        style={{
          background: `url("${getClosest(
            document.body.offsetWidth
          )}") center center fixed no-repeat`,
          backgroundSize: 'cover',
        }}
      >
        <div className={classes.container}>
          <Grid container className={classes.gridContainer}>
            <Grid item className={classes.gridItem}>
              <div className={brandCls}>
                <h1 className={classes.title}>Filip Rafajec</h1>
                <div className={classes.line} />
                <h2 className={classes.subtitle}>
                  <span>Engineering lead</span> - <span>Technical consultant</span>
                </h2>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Parallax);
