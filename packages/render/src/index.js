// This file has to be called index.js for the hotloader to find it.
// Your top level component

import React from 'react';
import ReactDOM from 'react-dom';
import {
  AppContainer,
} from 'react-hot-loader';
import {
  App,
} from './App';
// Export your top level component as JSX (for static rendering)
export default App;

// Render your app
if (typeof document !== 'undefined') {
  // eslint-disable-next-line no-undef
  const target = document.getElementById('root');

  const renderMethod = target.hasChildNodes()
    ? ReactDOM.hydrate
    : ReactDOM.render;

  const render = (Comp) => {
    renderMethod(<AppContainer><Comp /></AppContainer>,
      target);
  };

  // Render!
  render(App);

  // Hot Module Replacement
  if (module && module.hot) {
    module.hot.accept('./App', () => {
      render(App);
    });
  }
}
