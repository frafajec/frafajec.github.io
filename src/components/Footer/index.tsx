import * as React from 'react';

import { List, ListItem, withStyles, WithStyles } from '@material-ui/core';

// @material-ui/icons
import FavoriteIcon from '@material-ui/icons/Favorite';

import styles from './styles';

// ------------------------------------------------------------
interface IFooterProps extends WithStyles<typeof styles> {}
interface IFooterState {}

// ------------------------------------------------------------
class Footer extends React.Component<IFooterProps, IFooterState> {
  render() {
    const { classes } = this.props;

    return (
      <footer className={classes.footer}>
        <div className={classes.container}>
          <div className={classes.left}>
            <List className={classes.list}>
              <ListItem className={classes.listItem}>
                <a
                  href="https://www.creative-tim.com/"
                  className={classes.leftLink}
                  target="_blank"
                >
                  Creative Tim
                </a>
              </ListItem>
              <ListItem className={classes.listItem}>
                <a
                  href="https://www.creative-tim.com/presentation"
                  className={classes.leftLink}
                  target="_blank"
                >
                  About us
                </a>
              </ListItem>
              <ListItem className={classes.listItem}>
                <a
                  href="http://blog.creative-tim.com/"
                  className={classes.leftLink}
                  target="_blank"
                >
                  Blog
                </a>
              </ListItem>
              <ListItem className={classes.listItem}>
                <a
                  href="https://www.creative-tim.com/license"
                  className={classes.leftLink}
                  target="_blank"
                >
                  Licenses
                </a>
              </ListItem>
            </List>
          </div>
          <div className={classes.right}>
            &copy; {1900 + (new Date() as any).getYear()} , made with{' '}
            <FavoriteIcon className={classes.icon} /> by{' '}
            <a
              href="https://www.linkedin.com/in/frafajec"
              className={classes.rightLink}
              target="_blank"
            >
              Filip Rafajec
            </a>{' '}
          </div>
        </div>
      </footer>
    );
  }
}

export default withStyles(styles)(Footer);
