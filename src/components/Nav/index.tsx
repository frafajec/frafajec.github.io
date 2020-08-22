import * as React from 'react';

// @material-ui/core components
import { withStyles, WithStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';

import GA from 'core/ga';
import HeaderLinks from './HeaderLinks';
import icon from 'assets/icons/icon.png';

import styles from './styles';

// ------------------------------------------------------------
interface IHeaderProps extends WithStyles<typeof styles> {}
interface IHeaderState {
  readonly mobileOpen: boolean;
}

// ------------------------------------------------------------
class Header extends React.Component<IHeaderProps, IHeaderState> {
  constructor(props: IHeaderProps) {
    super(props);

    this.state = {
      mobileOpen: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.headerColorChange);
    this.headerColorChange();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.headerColorChange);
  }

  onLogoClick() {
    GA.click('logo');
  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
    GA.toggleMobileMenu();
  };

  headerColorChange = () => {
    const { classes } = this.props;
    const windowsScrollTop = window.pageYOffset;
    const scrollColorChange = 400;

    if (windowsScrollTop > scrollColorChange) {
      document.body.getElementsByTagName('header')[0].classList.remove(classes.transparent);
      document.body.getElementsByTagName('header')[0].classList.add(classes.overApp);
      document.body.getElementsByClassName(classes.logo)[0].classList.add(classes.logoScrolled);
    } else {
      document.body.getElementsByTagName('header')[0].classList.add(classes.transparent);
      document.body.getElementsByTagName('header')[0].classList.remove(classes.overApp);
      document.body.getElementsByClassName(classes.logo)[0].classList.remove(classes.logoScrolled);
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.container}>
          <div className={classes.flex} onClick={this.onLogoClick}>
            <img src={icon} alt="home" className={classes.logo} />
          </div>

          <Hidden smDown implementation="css">
            <HeaderLinks />
          </Hidden>

          <Hidden mdUp>
            <IconButton color="inherit" aria-label="open drawer" onClick={this.handleDrawerToggle}>
              <i className={classes.mobileMenu + ' fas fa-bars'} />
            </IconButton>
          </Hidden>
        </Toolbar>

        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={'right'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.appResponsive}>
              <HeaderLinks drawer onDrawerClose={this.handleDrawerToggle} />
            </div>
          </Drawer>
        </Hidden>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
