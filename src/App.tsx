import * as React from 'react';
import * as cn from 'classnames';

import { ReactComponent as Logo } from './logo.svg';

import styles from './App.scssm';

class App extends React.Component {
  render() {
    return (
      <div className={cn(styles.App, styles.App2)}>
        <div className={styles.AppHeader}>
          <Logo className={styles.AppLogo} />
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
