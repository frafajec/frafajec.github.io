import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
// import * as cn from 'classnames';

import Header from 'components/Header';
import personalImage from 'assets/personal-image.jpg';

import styles from './styles';

// ------------------------------------------------------------
interface IProfileProps extends WithStyles<typeof styles> {
  readonly id: string;
}
interface IProfileState {
  readonly imageTransform: string;
}

// ------------------------------------------------------------
class Profile extends React.Component<IProfileProps, IProfileState> {
  constructor(props: IProfileProps) {
    super(props);

    this.state = {
      imageTransform: '',
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.resetTransform);
    this.resetTransform();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.resetTransform);
  }

  resetTransform = () => {
    const { top } = document.getElementById('profile-picture')!.getBoundingClientRect();
    const scroll = window.pageYOffset - (top + window.innerHeight / 4); // - top + 40; // position where it should start moving
    const translate = (Math.min(Math.max(scroll, -300), 300) * 0.15) / 3;

    // don't parallax on low res, it is different layout
    this.setState({
      imageTransform: window.innerWidth < 768 ? '' : 'translate3d(0,' + translate + 'px,0)',
    });
  };

  getAge() {
    const diff = (new Date() as any) - (new Date(1992, 9, 20) as any);
    const year = 1000 * 60 * 60 * 24 * 365;
    return Math.floor(diff / year);
  }

  render() {
    const { classes, id } = this.props;
    const { imageTransform } = this.state;
    const imgStyle = { transform: imageTransform };

    return (
      <div id={id} className={classes.container}>
        <Grid container className={classes.gridContainer}>
          <Grid item className={classes.gridItem}>
            <Header
              title={'Profile'}
              quote={'”We become what we think about.” - Earl Nightingale'}
            />
            <Grid container className={classes.gridContainer}>
              <Grid item className={classes.gridItemContent}>
                <div className={classes.about}>
                  <h3 className={classes.title}>About me</h3>
                  <p className={classes.description}>
                    I am a young mind with goals set high and the ambition to accomplish even more.
                    Currently, I am employed as Technical lead for the big intercontinental team
                    with the single purpose - to create amazing things.
                    <br />
                    <br /> My primary specialization is Web development with thorough guidance from
                    ideas conception, designing, prototyping to development and QA.
                    <br />
                    <br />I am open to any kind of project that aims to create the product that
                    people love to use. I have various quality people at my disposal as well if the
                    need arises for anything more than development.
                  </p>
                </div>
              </Grid>
              <Grid item className={classes.gridItemContent}>
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
                    style={imgStyle}
                    src={personalImage}
                    alt="personal-picture"
                  />
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
