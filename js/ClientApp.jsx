// @flow

import React from 'react';
import { render } from 'react-dom';
import App from './App';

const renderApp = () => {
  render(<App />, document.getElementById('app'));
};
renderApp();

// the module variable is coming from webpack
if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
}