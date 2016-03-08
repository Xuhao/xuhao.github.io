import React from "react";
import Sidebar from "./Sidebar";
import { RouteHandler } from "react-router";

const Layout = React.createClass({
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
});

export default Layout;
