import React from "react";
import { Route, DefaultRoute, NotFoundRoute, RouteHandler } from "react-router";
import Layout from './components/Layout';
import About from "./components/pages/about";
import Job from "./components/pages/job";
import Skill from "./components/pages/skill";
import Works from "./components/pages/works";
import Contact from "./components/pages/contact";

const routes = (
  <Route name="app" path="/" handler={Layout}>
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
