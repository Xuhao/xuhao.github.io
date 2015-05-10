"use strict";
var React = require("react");

module.exports = React.createClass({
  render: function () {
    return (
      <div id="browser_ext_works">
        <h2>浏览器插件</h2>
        Ruby开发文档
        <br />For Chrome：
        <a href="https://chrome.google.com/webstore/detail/ruby%E5%BC%80%E5%8F%91%E6%96%87%E6%A1%A3/fldajflbololikdfkenehickgniedbdb" target="_blank">https://chrome.google.com/webstore/detail/ruby%E5%BC%80%E5%8F%91%E6%96%87%E6%A1%A3/fldajflbololikdfkenehickgniedbdb</a>
        <br />For Firefox：
        <a href="https://addons.mozilla.org/en-US/firefox/addon/ruby_doc/" target="_blank">https://addons.mozilla.org/en-US/firefox/addon/ruby_doc/</a>
        <br />For Safari：
        <a href="http://doc.rubyfans.com/extensions/safari/ruby_doc_v1.2.safariextz" target="_blank">http://doc.rubyfans.com/extensions/safari/ruby_doc_v1.2.safariextz</a>
      </div>
    );
  }
});
