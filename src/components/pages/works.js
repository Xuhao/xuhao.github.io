import React from 'react';
import RubyWorks from './works/ruby';
import Github from './works/github';
import ReactWorks from './works/react';
import BrowserExt from './works/browserExt';
import PHP from './works/php';
import VB from './works/vb';
import i18n from '../../core/i18n';

export default () => {
  return (
    <div id="works">
      <h1>{i18n.t('translation:::works::my works')}</h1>
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
};
