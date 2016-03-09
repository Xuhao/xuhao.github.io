import React, { Component } from 'react';
import Sidebar from './Sidebar';
import { RouteHandler } from 'react-router';

class Layout extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <div id="content">
          <RouteHandler/>
        </div>
      </div>
    );
  }
}

export default Layout;
