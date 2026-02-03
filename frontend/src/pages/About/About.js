import React from 'react';
import SkillCard from '../../components/SkillCard/SkillCard';
import InterestCard from '../../components/InterestCard/InterestCard';
import LocationMap from '../../components/LocationMap';
import { aboutData } from '../../data';
import './About.css';

const About = () => {
  const frontendSkills = aboutData.skills.filter(s => s.category === 'frontend');
  const backendSkills = aboutData.skills.filter(s => s.category === 'backend');
  const databaseSkills = aboutData.skills.filter(s => s.category === 'database');

  return (
    <section className="about-page">
      <div className="about-header">
        <span className="about-label">ABOUT ME</span>
        <h1>{aboutData.title}</h1>
        <p>{aboutData.description}</p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <div className="section-card">
            <h2>
              <span className="section-icon">✨</span>
              My Reads
            </h2>
            <p>Explore the books shaping my perspectives.</p>
            <div className="book-showcase">
              <div className="book-cover">
                <div className="book-title">{aboutData.book.title}</div>
                <div className="book-subtitle">{aboutData.book.subtitle}</div>
              </div>
            </div>
          </div>

          <div className="section-card">
            <h2>
              <span className="section-icon">✨</span>
              My Toolbox
            </h2>
            <p>Explore the technologies and tools I use to craft exceptional digital experiences.</p>
            
            <div className="toolbox-grid">
              {frontendSkills.map((skill, index) => (
                <SkillCard key={index} name={skill.name} icon={skill.icon} />
              ))}
              {backendSkills.map((skill, index) => (
                <SkillCard key={index} name={skill.name} icon={skill.icon} />
              ))}
              {databaseSkills.map((skill, index) => (
                <SkillCard key={index} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
        </div>

        <div className="about-sidebar">
          <div className="section-card">
            <h2>
              <span className="section-icon">✨</span>
              Beyond the Code
            </h2>
            <p>Explore my interests and hobbies beyond the digital realm.</p>
            
            <div className="interests-grid">
              {aboutData.interests.map((interest, index) => (
                <InterestCard key={index} name={interest.name} icon={interest.icon} />
              ))}
            </div>
          </div>

          <LocationMap />
        </div>
      </div>
    </section>
  );
};

export default About;
