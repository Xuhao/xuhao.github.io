import React from 'react';
import { render } from 'react-dom';
import Router from 'react-router';
import routes from './src/routes';

Router.run(routes, Router.HistoryLocation, function (Handler) {
  render(<Handler/>, document.getElementById('container'));
});
