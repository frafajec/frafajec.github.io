import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './utils/registerServiceWorker';
import newStore from './state/store';

import App from './modules/App';

import './styles/index.scss';

const store = newStore();
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
