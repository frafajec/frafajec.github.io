/*eslint-disable*/
import * as React from 'react';

// @material-ui/core components
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

import { headerLinks, headerLinkKey } from 'core/constants';
import styles from './styles';

// ------------------------------------------------------------
interface IItemProps {
  readonly drawer?: boolean;
  readonly values: typeof headerLinks[headerLinkKey];
}
interface IProps extends WithStyles<typeof styles>, IItemProps {}

// ------------------------------------------------------------
function Item({ ...props }: IProps) {
  const { classes, drawer = false, values } = props;

  return (
    <ListItem className={classes.listItem}>
      <Tooltip
        id={values.id}
        title={values.title}
        placement={window.innerWidth > 959 ? 'top' : 'left'}
        classes={{ tooltip: classes.tooltip }}
      >
        <Button
          href={values.href}
          target="_blank"
          onClick={values.onClick}
          className={classes.navLink}
        >
          <i className={classes.icons + ' ' + values.icon} />
          {drawer ? <span className={classes.navLinkText}>{values.title}</span> : null}
        </Button>
      </Tooltip>
    </ListItem>
  );
}

export default withStyles(styles)(Item);
