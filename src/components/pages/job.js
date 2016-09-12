import React, { Component } from 'react';
import i18n from '../../core/i18n';

class Job extends Component {
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
  }

  render() {
    return (
      <div id="job" className="content-body">
        <h1>{i18n.t('translation:::job::my job')}</h1>
        <div name="linkedin_profile"></div>
        <div>Linkedin: <a href="https://www.linkedin.com/in/hao-xu-98494879" target="_blank">https://www.linkedin.com/in/hao-xu-98494879</a></div>
      </div>
    );
  }
}

export default Job;
