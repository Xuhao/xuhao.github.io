var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <div id="skill">
        <h1>我的技能</h1>
        <ul id="skills">
          <li>
            <span className="name">Ruby</span>
            <span className="skills-icon level-4"></span>
          </li>
          <li>
            <span className="name">Javascript</span>
            <span className="skills-icon level-4"></span>
          </li>
          <li>
            <span className="name">CSS</span>
            <span className="skills-icon level-4"></span>
          </li>
          <li>
            <span className="name">HTML</span>
            <span className="skills-icon level-5"></span>
          </li>
          <li>
            <span className="name">Mysql</span>
            <span className="skills-icon level-3"></span>
          </li>
          <li>
            <span className="name">Postgresql</span>
            <span className="skills-icon level-3"></span>
          </li>
          <li>
            <span className="name">Mongodb</span>
            <span className="skills-icon level-3"></span>
          </li>
        </ul>
      </div>
    );
  }
});