import React from 'react';
import './Hero.css';

const Hero = () => {
  const profilePhoto = '/images/profile/profile (2) (1).png';
  const introWords = [
    'Hi,',
    "I'm",
    'Selvaprakash',
    'V,',
    'an',
    'AI',
    '&',
    'Data',
    'Science',
    'student',
    'from',
    'Coimbatore,',
    'India.',
    'I',
    'build',
    'data-driven',
    'projects,',
    'dashboards,',
    'and',
    'ML',
    'models',
    'with',
    'a',
    'focus',
    'on',
    'clear',
    'insights',
    'and',
    'real-world',
    'impact.'
  ];

  return (
    <section className="hero">
      <div className="stars"></div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-column hero-left">
            <img src={profilePhoto} alt="Selvaprakash V" className="profile-photo" />
          </div>

          <div className="hero-column hero-right">
            <div className="hero-intro">
              <div className="hero-welcome" aria-hidden="true">
                <div className="welcome-line" />
                <div className="welcome-svg" role="presentation">
                  <svg viewBox="0 0 600 130" aria-hidden="true">
                    <text x="0" y="90" className="welcome-outline">WELCOME</text>
                  </svg>
                </div>
              </div>
              <div className="hero-words" aria-label="Introduction">
                {introWords.map((word, index) => (
                  <span
                    key={`${word}-${index}`}
                    className="word"
                    style={{ '--i': index }}
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>

            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">
                Explore my work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
