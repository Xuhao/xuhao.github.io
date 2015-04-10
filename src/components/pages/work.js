var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <div id="work">
        <h1>我的作品</h1>
        <hr />
        <h2>Ruby</h2>
        医院之家：中国医院信息中心
        <br />地址：
        <a href="http://www.yihub.com" target="_blank">www.yihub.com</a>
        <br />
        <br />Ruby开发文档：提供在线的Ruby和一些基于Ruby的优秀开源软件的在线API文档查阅服务，例如Rails、Rack等。
        <br />地址：
        <a href="http://doc.rubyfans.com" target="_blank">doc.rubyfans.com</a>

        <h4>Github上的项目</h4>
        <ul id="github">
          <li className="loader">
            <img src="assets/images/ajax_loader.gif" />正在加载...</li>
        </ul>
        <hr />
        <h2>浏览器插件</h2>
        Ruby开发文档
        <br />For Chrome：
        <a href="https://chrome.google.com/webstore/detail/ruby%E5%BC%80%E5%8F%91%E6%96%87%E6%A1%A3/fldajflbololikdfkenehickgniedbdb" target="_blank">https://chrome.google.com/webstore/detail/ruby%E5%BC%80%E5%8F%91%E6%96%87%E6%A1%A3/fldajflbololikdfkenehickgniedbdb</a>
        <br />For Firefox：
        <a href="https://addons.mozilla.org/en-US/firefox/addon/ruby_doc/" target="_blank">https://addons.mozilla.org/en-US/firefox/addon/ruby_doc/</a>
        <br />For Safari：
        <a href="http://doc.rubyfans.com/extensions/safari/ruby_doc_v1.2.safariextz" target="_blank">http://doc.rubyfans.com/extensions/safari/ruby_doc_v1.2.safariextz</a>
        <hr />
        <h2>PHP</h2>
        B-Check：PHP探针
        <br />地址：
        <a href="b-check/" target="_blank">http://rubyfans.com/b-check</a>
        <hr />
        <h2>Visual Basic 6.0</h2>
        牛牛快吼：海盗王巨剑士挂机辅助工具
        <br />地址：
        <a href="kuaihou/" target="_blank">http://rubyfans.com/kuaihou</a>
        <br />
      </div>
    );
  }
});