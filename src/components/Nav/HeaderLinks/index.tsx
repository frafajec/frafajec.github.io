/*eslint-disable*/
import * as React from 'react';

// @material-ui/core components
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';

import Item from './Item';

import { headerLinkKey, headerLinks } from 'core/constants';
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
          <i className={'far fa-times-circle'} />
        </Button>
      )}
      <List className={classes.list}>
        <Item drawer values={headerLinks[headerLinkKey.email]} />
        <Item drawer values={headerLinks[headerLinkKey.linkedin]} />
        <Item drawer values={headerLinks[headerLinkKey.github]} />
        {/* <Item drawer values={headerLinks[headerLinkKey.medium]} /> */}
      </List>
    </>
  );
}

export default withStyles(styles)(HeaderLinks);
