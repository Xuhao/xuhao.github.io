"use strict";
var constants = require("./../constants/githubConstant");
var request = require("superagent");

module.exports = {
  loadRepos: function(username) {
    this.dispatch(constants.LOAD_REPO);
    request.get(`https://api.github.com/users/${username}/repos`)
      .accept("json")
      .end(function(err, res) {
        if (err) {
          this.dispatch(constants.LOAD_REPO_FAIL, err);
        } else {
          this.dispatch(constants.LOAD_REPO_SUCCESS, res.body);
        }
      }.bind(this));
  }
};
