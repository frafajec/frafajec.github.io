import * as React from 'react';
import * as cn from 'classnames';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Logo from 'assets/icons/logo.svg';

import styles from './App.scssm';

// ------------------------------------------------------------
interface IAppProps {}
interface IAppState {}

// ------------------------------------------------------------
class App extends React.Component<IAppProps, IAppState> {
  render() {
    return (
      <div className={cn(styles.App)}>
        <Grid container spacing={24}>
          <Grid item xs>
            <Paper className={styles.paper}>xs</Paper>
          </Grid>
          <Grid item xs>
            <Logo className={styles.AppLogo} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

// ------------------------------------------------------------
export default App;
