"use strict";
import React from "react";

const Job = React.createClass({
  render() {
    return (
      <div id="job">
        <h1>我的工作</h1>
        <img src="assets/images/xuhao.png" className="my-photo" />当前，我是易空海(Ekohe)的一名Web开发工程师。
        <br />
        <a href="http://ekohe.com/people#hao" target="_blank">http://ekohe.com/people#hao</a>
      </div>
    );
  }
});

export default Job;
