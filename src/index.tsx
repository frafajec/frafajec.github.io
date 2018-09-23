import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

import App from 'modules/App';

import registerServiceWorker from 'core/registerServiceWorker';

import theme from './styles/theme';
import 'styles/index.scss';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
