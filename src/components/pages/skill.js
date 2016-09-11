import React from 'react';
import i18n from '../../core/i18n';

const Skill = props => {
  return (
    <div id="skill">
      <h1>{i18n.t('translation:::skill::my skills')}</h1>
      <ul id="skills">
        {props.skills.map((skill) => {
          return (
            <li key={skill.name}>
              <span className="name">{skill.name}</span>
              <span className={`skills-icon level-${skill.level}`}></span>
            </li>
          );
        })}
      </ul>
    </div>
  );
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
