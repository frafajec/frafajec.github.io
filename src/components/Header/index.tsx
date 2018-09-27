import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core';
// import * as cn from 'classnames';

import styles from './styles';

// ------------------------------------------------------------
interface IHeaderProps extends WithStyles<typeof styles> {
  readonly title: string;
  readonly quote: string;
  readonly withUnderline?: boolean;
}
interface IHeaderState {}

// ------------------------------------------------------------
class Header extends React.Component<IHeaderProps, IHeaderState> {
  render() {
    const { classes, title, quote, withUnderline = true } = this.props;
    return (
      <div className={classes.container}>
        <h2 className={classes.title}>{title}</h2>
        <p className={classes.quote}>{quote}</p>
        {withUnderline ? <hr className={classes.underline} /> : null}
      </div>
    );
  }
}

export default withStyles(styles)(Header);
