import React from 'react';
import { InfiniteSlider, ProgressiveBlur } from '../ui';
import { aboutData } from '../../data';
import './SkillsSlider.css';

const SkillsSlider = () => {
  // Get all skills regardless of category for the slider
  const allSkills = aboutData.skills;

  return (
    <section className="skills-slider-section">
      <div className="skills-slider-container">
        <ProgressiveBlur blurStrength="medium">
          <InfiniteSlider speed={22} hoverSpeed={40}>
            {allSkills.map((skill, index) => (
              <div key={index} className="slider-skill-item">
                <div className="slider-skill-icon" aria-hidden="true">
                  {skill.icon}
                </div>
                <div className="slider-skill-name">{skill.name}</div>
              </div>
            ))}
          </InfiniteSlider>
        </ProgressiveBlur>
      </div>
    </section>
  );
};

export default SkillsSlider;
