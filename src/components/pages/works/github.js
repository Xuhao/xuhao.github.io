var React = require('react');
var Fluxxor = require('fluxxor');
var GithubStore = require('../../stores/githubStore');
var githubActions = require('../../actions/githubAction');

var actions = {
  github: githubActions
}
var stores = {
  GithubStore: new GithubStore()
};

var flux = new Fluxxor.Flux(stores, actions);
window.flux = flux;

module.exports = React.createClass({
  render: function () {
    return (
      <div id="github_works">
        <h4>Github上的项目</h4>
        <ul id="github">
          <li className="loader">
            <img src="assets/images/ajax_loader.gif" />正在加载...
          </li>
        </ul>
      </div>
    );
  }
});