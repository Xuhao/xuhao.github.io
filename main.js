"use strict";
import React from "react";
import Router from "react-router";
import Fluxxor from "fluxxor";
import routes from "./src/routes";
import GithubStore from "./src/stores/githubStore";
import githubAction from "./src/actions/githubAction";

const actions = {
  github: githubAction
};
const stores = {
  GithubStore: new GithubStore()
};

const flux = new Fluxxor.Flux(stores, actions);

flux.on("dispatch", function(type, payload) {
  if (console && console.log) {
    console.log("[Dispatch]", type, payload);
  }
});

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler flux={flux} />, document.body);
});
