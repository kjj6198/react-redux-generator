import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';

import Root from './components/Root';
import './styles/index.scss';

const store = configureStore();

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.body
);
