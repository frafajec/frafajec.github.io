import * as React from 'react';
import { scroller } from 'react-scroll';
import { partial } from 'lodash';

import { withStyles, WithStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

// @material-ui/icons
import FavoriteIcon from '@material-ui/icons/Favorite';

import { scrollTo, urls } from 'core/constants';
import styles from './styles';

// ------------------------------------------------------------
interface IFooterProps extends WithStyles<typeof styles> {}
interface IFooterState {}

// ------------------------------------------------------------
class Footer extends React.Component<IFooterProps, IFooterState> {
  scrollTo(location: string) {
    scroller.scrollTo(location, { smooth: true, duration: 800 });
  }

  render() {
    const { classes } = this.props;

    return (
      <footer className={classes.footer}>
        <div className={classes.container}>
          <div className={classes.left}>
            <List className={classes.list}>
              <ListItem className={classes.listItem}>
                {/* <a
                  href={urls.LINKEDIN}
                  className={classes.leftLink}
                  target="_blank"
                >
                  Linkedin
                </a> */}
                <Button onClick={partial(this.scrollTo, scrollTo.top)} className={classes.leftLink}>
                  To top
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  onClick={partial(this.scrollTo, scrollTo.profile)}
                  className={classes.leftLink}
                >
                  Profile
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  onClick={partial(this.scrollTo, scrollTo.contact)}
                  className={classes.leftLink}
                >
                  Contact
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  onClick={partial(this.scrollTo, scrollTo.experiences)}
                  className={classes.leftLink}
                >
                  Experiences
                </Button>
              </ListItem>
            </List>
          </div>
          <div className={classes.right}>
            &copy; {1900 + (new Date() as any).getYear()}, made with{' '}
            <FavoriteIcon className={classes.icon} /> by{' '}
            <a href={urls.LINKEDIN} className={classes.rightLink} target="_blank">
              Filip Rafajec
            </a>{' '}
          </div>
        </div>
      </footer>
    );
  }
}

export default withStyles(styles)(Footer);
