import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

import App from './App';
import * as serviceWorker from './core/serviceWorker';

import theme from './styles/theme';
import 'styles/index.css';

ReactDOM.render(
  // <React.StrictMode>
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
