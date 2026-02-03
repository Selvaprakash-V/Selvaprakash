import React from 'react';
import SkillCard from '../../components/SkillCard/SkillCard';
import { aboutData } from '../../data';
import './Skills.css';

const Skills = () => {
  const frontendSkills = aboutData.skills.filter(s => s.category === 'frontend');
  const backendSkills = aboutData.skills.filter(s => s.category === 'backend');
  const databaseSkills = aboutData.skills.filter(s => s.category === 'database');

  return (
    <section className="skills-page">
      <div className="skills-header">
        <h1>Skills</h1>
        <p>Technologies and tools I use to craft exceptional digital experiences</p>
      </div>

      <div className="skills-content">
        <div className="skills-category">
          <h2>Frontend Development</h2>
          <div className="skills-grid">
            {frontendSkills.map((skill, index) => (
              <SkillCard key={index} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h2>Backend Development</h2>
          <div className="skills-grid">
            {backendSkills.map((skill, index) => (
              <SkillCard key={index} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h2>Databases</h2>
          <div className="skills-grid">
            {databaseSkills.map((skill, index) => (
              <SkillCard key={index} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
