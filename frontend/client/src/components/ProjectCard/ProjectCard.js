import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const { title, description, company, duration, image, liveUrl, githubUrl, technologies } = project;

  return (
    <div className="project-card">
      <div className="project-image">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className="project-placeholder">
            <span></span>
          </div>
        )}
      </div>

      <div className="project-content">
        {company && <div className="project-company">{company}</div>}
        
        <h3 className="project-title">{title}</h3>
        
        <p className="project-description">{description}</p>

        {duration && <div className="project-duration">{duration}</div>}

        {technologies && technologies.length > 0 && (
          <div className="project-tech">
            {technologies.slice(0, 3).map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
            {technologies.length > 3 && (
              <span className="tech-tag tech-more">+{technologies.length - 3}</span>
            )}
          </div>
        )}

        <div className="project-links">
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <span></span> Live Demo
            </a>
          )}
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <span></span> GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
