import React, { Component, PropTypes } from 'react';
import chineseIcon from '../../assets/images/icons/chinese-flag.png';
import usaIcon from '../../assets/images/icons/usa-flag.png';

class LanguagePicker extends Component {
  constructor() {
    super();

    this.lngFlags = [
      {key: 'zh-CN', icon: chineseIcon, alt: '简体中文'},
      {key: 'en', icon: usaIcon, alt: 'English (US)'}
    ];
  }

  render() {
    return (
      <div id="language-picker">
        {this.lngFlags.map((lng) => {
          const className = this.props.lng === lng.key ? 'disabled' : 'active';
          return <img src={lng.icon} alt={lng.alt} title={lng.alt} key={lng.key} className={className} onClick={this.props.onSwitch.bind(this, lng.key)} />;
        })}
      </div>
    );
  }
}

LanguagePicker.propTypes = {
  lng: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired
}

export default LanguagePicker;
