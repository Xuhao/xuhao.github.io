var React = require('react');

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      skills: [
        {name: 'Ruby', level: 5},
        {name: 'Javascript', level: 4},
        {name: 'CSS', level: 4},
        {name: 'HTML', level: 5},
        {name: 'Mysql', level: 3},
        {name: 'Postgresql', level: 3},
        {name: 'Mongodb', level: 3},
        {name: 'React', level: 4},
        {name: 'React-Native', level: 2},
      ]
    };
  },

  render: function () {
    return (
      <div id="skill">
        <h1>我的技能</h1>
        <ul id="skills">
          {this.props.skills.map(function(skill, i){
            return (
              <li>
                <span className="name">{skill.name}</span>
                <span className={`skills-icon level-${skill.level}`}></span>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
});