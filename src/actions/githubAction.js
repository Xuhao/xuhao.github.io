var constants = require('./../constants/githubConstant');

module.exports = {
  loadRepos: function() {
    this.dispatch(constants.LOAD_REPO);
  }
};