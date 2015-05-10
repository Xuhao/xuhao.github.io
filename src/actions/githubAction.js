"use strict";
import constants from "./../constants/githubConstant";
import request from "superagent";

const githubAction = {
  loadRepos(username) {
    this.dispatch(constants.LOAD_REPO);
    request.get(`https://api.github.com/users/${username}/repos`)
      .accept("json")
      .end((err, res) => {
        if (err) {
          this.dispatch(constants.LOAD_REPO_FAIL, err);
        } else {
          this.dispatch(constants.LOAD_REPO_SUCCESS, res.body);
        }
      });
  }
};

export default githubAction;
