import React, { Component } from 'react';

class Skill extends Component {
  render() {
    return (
      <div id="skill">
        <h1>我的技能</h1>
        <ul id="skills">
          {this.props.skills.map((skill, i) => {
            return (
              <li key={i}>
                <span className="name">{skill.name}</span>
                <span className={`skills-icon level-${skill.level}`}></span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

Skill.defaultProps = {
  skills: [
    {name: "Ruby", level: 5},
    {name: "Javascript", level: 4},
    {name: "CSS", level: 4},
    {name: "HTML", level: 5},
    {name: "Mysql", level: 3},
    {name: "Postgresql", level: 3},
    {name: "Mongodb", level: 3},
    {name: "React", level: 4},
    {name: "React-Native", level: 2}
  ]
};

export default Skill;
