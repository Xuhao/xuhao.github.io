"use strict";
var React = require("react");
var RubyWorks = require("./works/ruby");
var Github = require("./works/github");
var ReactWorks = require("./works/react");
var BrowserExt = require("./works/browserExt");
var PHP = require("./works/php");
var VB = require("./works/vb");

module.exports = React.createClass({
  render: function () {
    return (
      <div id="works">
        <h1>我的作品</h1>
        <hr />
        <RubyWorks />
        <hr />
        <Github />
        <hr />
        <ReactWorks />
        <hr />
        <BrowserExt />
        <hr />
        <PHP />
        <hr />
        <VB />
      </div>
    );
  }
});
