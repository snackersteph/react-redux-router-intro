// @flow

import React from 'react';
import { render } from 'react-dom';
// import Perf from 'react-addons-perf';
import App from './App';

// Only used for development
// window.Perf = Perf;
// Perf.start();

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