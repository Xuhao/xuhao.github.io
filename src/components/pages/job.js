"use strict";
import React from "react";

const Job = React.createClass({
  componentDidMount() {
    const scriptOne = document.createElement('script');
    const scriptTwo = document.createElement('script');
    const wrapper = document.getElementsByName("linkedin_profile")[0];
    scriptOne.type = 'text/javascript';
    scriptOne.src = '//platform.linkedin.com/in.js';
    scriptTwo.type = 'IN/MemberProfile';
    scriptTwo.dataset.id = 'https://www.linkedin.com/pub/hao-xu/79/948/984';
    scriptTwo.dataset.format = 'inline';
    wrapper.appendChild(scriptOne);
    wrapper.appendChild(scriptTwo);
  },

  render() {
    return (
      <div id="job">
        <h1>我的工作</h1>
        <div name="linkedin_profile"></div>
      </div>
    );
  }
});

export default Job;
