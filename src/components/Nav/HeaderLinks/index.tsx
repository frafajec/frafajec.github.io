/*eslint-disable*/
import * as React from 'react';

// @material-ui/core components
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

import { urls } from 'core/constants';
import styles from './styles';

// ------------------------------------------------------------
interface IHeaderLinksProps extends WithStyles<typeof styles> {}

// ------------------------------------------------------------
function HeaderLinks({ ...props }: IHeaderLinksProps) {
  const { classes } = props;

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="email"
          title="Send me an email"
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button href={`mailto:${urls.EMAIL}`} className={classes.navLink}>
            <i className={classes.icons + ' fas fa-envelope'} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="linkedin"
          title="Reach me on linkedin"
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button href={urls.LINKEDIN} target="_blank" className={classes.navLink}>
            <i className={classes.icons + ' fab fa-linkedin'} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="github"
          title="Check my code on git"
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button href={urls.GITHUB} target="_blank" className={classes.navLink}>
            <i className={classes.icons + ' fab fa-github'} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="medium"
          title="Follow me on medium"
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button href={urls.MEDIUM} target="_blank" className={classes.navLink}>
            <i className={classes.icons + ' fab fa-medium'} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default withStyles(styles)(HeaderLinks);
