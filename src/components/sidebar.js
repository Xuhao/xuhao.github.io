"use strict";
var React = require("react");
var Router = require("react-router");
var Link = Router.Link;

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      linksMap: [
        ["about", "关于"],
        ["job", "工作"],
        ["skill", "技能"],
        ["works", "作品"],
        ["contact", "联系"]
      ]
    };
  },

  render: function () {
    var currentPathname = this.context.router.getCurrentPathname().replace("/", "") || "about";
    return (
      <div id="menu" className="shadow">
        <ul>
          {this.props.linksMap.map(function(linkInfo, i) {
            return (
              <li className={linkInfo[0] === currentPathname ? "active" : ""} key={i}>
                <Link to={linkInfo[0]}>{linkInfo[1]}</Link>
              </li>
            );
          })}
        </ul>
        <div className="icp-link"><a href="http://www.miitbeian.gov.cn">豫ICP备11005941号-4</a></div>
      </div>
    );
  }
});
