"use strict";
import React from "react";
import Fluxxor from "fluxxor";
import {Route, DefaultRoute, NotFoundRoute, RouteHandler} from "react-router";

import Sidebar from "./components/sidebar";
import About from "./components/pages/about";
import Job from "./components/pages/job";
import Skill from "./components/pages/skill";
import Works from "./components/pages/works";
import Contact from "./components/pages/contact";

const FluxMixin = Fluxxor.FluxMixin(React);
const App = React.createClass({
  mixins: [FluxMixin],

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

const routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="about" handler={About}/>
    <Route name="job" handler={Job}/>
    <Route name="skill" handler={Skill}/>
    <Route name="works" handler={Works}/>
    <Route name="contact" handler={Contact}/>
    <DefaultRoute handler={About}/>
    <NotFoundRoute handler={About}/>
  </Route>
);

export default routes;
