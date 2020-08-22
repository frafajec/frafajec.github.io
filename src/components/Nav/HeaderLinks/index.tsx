/*eslint-disable*/
import * as React from 'react';

// @material-ui/core components
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

import { urls } from 'core/constants';
import GA from 'core/ga';
import styles from './styles';

// ------------------------------------------------------------
interface IHeaderLinksProps {
  readonly drawer?: boolean;
  readonly onDrawerClose?: () => void;
}
interface IProps extends WithStyles<typeof styles>, IHeaderLinksProps {}

// ------------------------------------------------------------
function HeaderLinks({ ...props }: IProps) {
  const { classes, drawer = false, onDrawerClose } = props;

  return (
    <>
      {drawer && (
        <Button className={classes.closeButton} onClick={onDrawerClose}>
          <i className={classes.icons + ' far fa-times-circle'} />
        </Button>
      )}
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="email"
            title="Send me an email"
            placement={window.innerWidth > 959 ? 'top' : 'left'}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              href={`mailto:${urls.EMAIL}`}
              onClick={GA.openEmail}
              className={classes.navLink}
            >
              <i className={classes.icons + ' fas fa-envelope'} />
              {drawer ? <span className={classes.navLinkText}>Send me an email</span> : null}
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
            <Button
              href={urls.LINKEDIN}
              target="_blank"
              onClick={GA.openLinkedin}
              className={classes.navLink}
            >
              <i className={classes.icons + ' fab fa-linkedin'} />
              {drawer ? <span className={classes.navLinkText}>Reach me on linkedin</span> : null}
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="github"
            title="Check my code on github"
            placement={window.innerWidth > 959 ? 'top' : 'left'}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              href={urls.GITHUB}
              target="_blank"
              onClick={GA.openGithub}
              className={classes.navLink}
            >
              <i className={classes.icons + ' fab fa-github'} />
              {drawer ? <span className={classes.navLinkText}>Check my code on github</span> : null}
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
            <Button
              href={urls.MEDIUM}
              target="_blank"
              onClick={GA.openMedium}
              className={classes.navLink}
            >
              <i className={classes.icons + ' fab fa-medium'} />
              {drawer ? <span className={classes.navLinkText}>Follow me on medium</span> : null}
            </Button>
          </Tooltip>
        </ListItem>
      </List>
    </>
  );
}

export default withStyles(styles)(HeaderLinks);
