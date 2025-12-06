import React, { useState, useEffect } from 'react';
import SkillCard from '../../components/SkillCard/SkillCard';
import InterestCard from '../../components/InterestCard/InterestCard';
import LocationMap from '../../components/LocationMap';
import { aboutService } from '../../services/api';
import './About.css';

const About = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAbout();
  }, []);

  const fetchAbout = async () => {
    try {
      const response = await aboutService.get();
      setAboutData(response.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      // Fallback data
      setAboutData({
        title: 'A Glimpse Into My World',
        description: 'Learn more about who I am, what I do, and what inspires me.',
        skills: [
          { name: 'React Native', icon: '', category: 'frontend' },
          { name: 'Vue.js', icon: '', category: 'frontend' },
          { name: 'Next.js', icon: '', category: 'frontend' },
          { name: 'Jest', icon: '', category: 'frontend' },
          { name: 'Prisma ORM', icon: '', category: 'backend' },
          { name: 'TypeORM', icon: '', category: 'backend' },
          { name: 'MongoDB', icon: '', category: 'database' },
          { name: 'Firebase', icon: '', category: 'database' },
        ],
        interests: [
          { name: 'Traveling', icon: '' },
          { name: 'Basketball', icon: '' },
          { name: 'Running', icon: '' },
          { name: 'Gaming', icon: '' },
          { name: 'Music', icon: '' },
          { name: 'Reading', icon: '' },
        ],
      });
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

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
                <div className="book-title">Atomic Habits</div>
                <div className="book-subtitle">Tiny Changes, Remarkable Results</div>
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
