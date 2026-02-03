import React from 'react';
import { aboutData, contactInfo } from '../../data';
import './Resume.css';

const Resume = () => {
  return (
    <section className="resume-page">
      <div className="resume-header">
        <h1>Resume</h1>
        <p>Download my resume or view my qualifications below</p>
      </div>

      <div className="resume-content">
        <div className="resume-download">
          <a 
            href="/images/resume/Selvaprakash_Resume.pdf" 
            download
            className="download-btn"
          >
            Download Resume (PDF)
          </a>
        </div>

        <div className="resume-preview">
          <div className="resume-section">
            <h2>Contact Information</h2>
            <div className="resume-info">
              <p><strong>Email:</strong> {contactInfo.email}</p>
              <p><strong>Location:</strong> {contactInfo.location}</p>
              <p><strong>GitHub:</strong> <a href={contactInfo.social.github} target="_blank" rel="noopener noreferrer">github.com/Selvaprakash-V</a></p>
              <p><strong>LinkedIn:</strong> <a href={contactInfo.social.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/selvaprakashv007</a></p>
            </div>
          </div>

          <div className="resume-section">
            <h2>Technical Skills</h2>
            <div className="skills-list">
              <div className="skill-group">
                <h3>Frontend</h3>
                <p>{aboutData.skills.filter(s => s.category === 'frontend').map(s => s.name).join(', ')}</p>
              </div>
              <div className="skill-group">
                <h3>Backend</h3>
                <p>{aboutData.skills.filter(s => s.category === 'backend').map(s => s.name).join(', ')}</p>
              </div>
              <div className="skill-group">
                <h3>Databases</h3>
                <p>{aboutData.skills.filter(s => s.category === 'database').map(s => s.name).join(', ')}</p>
              </div>
            </div>
          </div>

          <div className="resume-section">
            <h2>Education</h2>
            <div className="education-item">
              <h3>Bachelor of Technology in Computer Science</h3>
              <p>Expected Graduation: 2026</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
