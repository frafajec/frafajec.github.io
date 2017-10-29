import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import newStore from './store';

import App from './containers/App';

import './styles/index.scss';

const store = newStore();
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
