var React = require('react');

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