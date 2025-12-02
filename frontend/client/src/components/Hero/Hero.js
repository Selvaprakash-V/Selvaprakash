import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="stars"></div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="avatar-container">
            <div className="avatar">
              <div className="avatar-image">👨‍💻</div>
            </div>
            <div className="status-badge">
              <span className="status-dot"></span>
              Available for new projects
            </div>
          </div>

          <h1 className="hero-title">
            Building Scalable
            <br />
            <span className="gradient-text">Software Solutions</span>
          </h1>

          <p className="hero-description">
            Senior Software Engineer specializing in full-stack development, scalable
            backend solutions, and performance optimization. I build robust, scalable
            applications that solve complex business challenges.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              <span className="btn-icon">🚀</span>
              Explore my work
            </a>
            <a href="#contact" className="btn btn-secondary">
              <span className="btn-icon">👋</span>
              Let's connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
