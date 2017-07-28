import React from 'react';
import logo from './logo.svg';
import './App.scssm';

function App() {
  return (
    <div styleName="App">
      <div styleName="App-header">
        <img src={logo} styleName="App-logo" alt="logo" />
        <h2 styleName="bla">Welcome to React</h2>
      </div>
      <p styleName="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}

export default App;
