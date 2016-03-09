import React, { Component } from 'react';
import RubyWorks from './works/ruby';
import Github from './works/github';
import ReactWorks from './works/react';
import BrowserExt from './works/browserExt';
import PHP from './works/php';
import VB from './works/vb';

class Works extends Component {
  render() {
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
}

export default Works;
