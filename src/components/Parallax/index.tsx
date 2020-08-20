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
  readonly transform: string;
}

// ------------------------------------------------------------
class Parallax extends React.Component<IParallaxProps, IParallaxState> {
  constructor(props: IParallaxProps) {
    super(props);

    this.state = {
      init: false,
      loaded: false,
      transform: 'scale(1.3)',
    };
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.resetTransform);
  }

  onImageLoaded = () => {
    const windowScrollTop = window.pageYOffset / 3;

    // resets scale for background and initiate parallax
    this.setState({
      init: true,
      transform: 'translate3d(0,' + windowScrollTop + 'px,0)',
    });

    window.addEventListener('scroll', this.resetTransform);
    setTimeout(this.setLoaded, 1600);
  };

  setLoaded = () => {
    // after parallax animation - cleanup
    this.setState({ loaded: true });
  };

  resetTransform = () => {
    const windowScrollTop = window.pageYOffset / 3;

    this.setState({
      transform: 'translate3d(0,' + windowScrollTop + 'px,0)',
    });
  };

  render() {
    const { classes } = this.props;
    const { init, loaded, transform } = this.state;

    const parallaxCls = cn(classes.parallax, {
      [classes.parallaxScale]: !loaded,
    });
    const brandCls = cn(classes.brand, { [classes.brandScale]: !init });
    const srcSet = `${ws320} 320w,
                    ${ws480} 480w,
                    ${ws768} 768w,
                    ${ws1024} 1024w,
                    ${ws1280} 1280w,
                    ${ws1366} 1366w,
                    ${ws1920} 1920w,
                    ${ws2600} 2600w`;

    return (
      <div className={parallaxCls} style={{ transform }}>
        <div className={classes.container}>
          <img
            className={classes.hero}
            onLoad={this.onImageLoaded}
            src={ws1366}
            srcSet={srcSet}
            alt="hero"
          />
          <Grid container className={classes.gridContainer}>
            <Grid item className={classes.gridItem}>
              <div className={brandCls}>
                <h1 className={classes.title}>Filip Rafajec</h1>
                <div className={classes.line} />
                <h3 className={classes.subtitle}>
                  <span>Web developer</span> - <span>Team lead</span>
                </h3>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Parallax);
