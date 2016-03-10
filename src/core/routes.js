import React from "react";
import { Route, IndexRoute } from "react-router";
import Layout from '../components/Layout';
import About from "../components/pages/about";
import Job from "../components/pages/job";
import Skill from "../components/pages/skill";
import Works from "../components/pages/works";
import Contact from "../components/pages/contact";

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={About}/>
    <Route path='about' component={About}/>
    <Route path='job' component={Job}/>
    <Route path='skill' component={Skill}/>
    <Route path='works' component={Works}/>
    <Route path='contact' component={Contact}/>
    <Route path='*' component={About}/>
  </Route>
);

export default routes;
