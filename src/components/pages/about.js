"use strict";
var React = require("react");

module.exports = React.createClass({
  render: function () {
    return (
      <div id="about">
        <h1>关于我</h1>
        <img src="assets/images/me.jpg" className="my-photo" />
        <p>我是一名Ruby开发工程师，草根站长。我07年毕业，计算机网络与通讯专业。在杭州工作了3年多，我从一名SEO优化工程师转变成一名Ruby开发工程师，11年我转战上海，继续从事Ruby开发，至今。我一直都很怀恋海南岛椰林下微风徐徐的夜晚和那里特有的清补凉！</p>
        <p>我每天的工作都是和Ruby,Javascript,CSS,HTML等这些Web相关技术打交道。Ruby是我最喜爱语言,也是我唯一一门拥有工作经验的语言。我喜欢Ruby的一切，除了它不适合做桌面应用程序。</p>
        <p>我的大部分时间都在和计算机打交道，我工作在Mac OS X和Ubuntu上，娱乐在Windows上。我希望能花更多的时间和人打交道，而不是计算机，我在努力改变。</p>
        <p>我大二的时候（05年）开始做网站，成为了一名草根站长。我一直在给自己创造成功的希望，但是一路走下来，我知道成功并不那么简单。但我还是会继续走下去。</p>
      </div>
    );
  }
});
