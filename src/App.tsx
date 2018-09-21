import * as React from 'react';
import * as cn from 'classnames';

import styles from './App.scssm';
// const logo = require('./logo.svg');
import { Logo } from './logo.svg';

class App extends React.Component {
  render() {
    return (
      <div className={cn(styles.App, styles.App2)}>
        <div className={styles.AppHeader}>
          {/* <img src={'logo'} className={styles.AppLogo} alt="logo" /> */}
          <Logo />
          <h2>Welcome to React</h2>
        </div>
        <p className={styles.AppIntro}>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
