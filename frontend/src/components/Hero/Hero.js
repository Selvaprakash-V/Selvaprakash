import React from 'react';
import './Hero.css';

const Hero = () => {
  const profilePhoto = '/images/profile/profile.png';
  const introWords = [
    'Hi,',
    "I'm",
    'Selvaprakash',
    'V,',
    'a',
    'full-stack',
    'developer',
    'from',
    'Coimbatore,',
    'India.',
    'I',
    'craft',
    'clean,',
    'scalable',
    'web',
    'apps',
    'and',
    'APIs',
    'with',
    'a',
    'focus',
    'on',
    'great',
    'UX',
    'and',
    'reliable',
    'delivery.'
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
