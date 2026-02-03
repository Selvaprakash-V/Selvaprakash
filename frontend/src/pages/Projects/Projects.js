import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { projects } from '../../data';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects-page">
      <div className="projects-header">
        <h1>Projects</h1>
        <p>Explore my recent work and contributions</p>
      </div>

      {projects.length > 0 ? (
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="no-projects">
          <p>No projects available yet.</p>
        </div>
      )}

      <div className="more-projects">
        <div className="more-projects-content">
          <h2>+25 MORE PROJECTS</h2>
          <p>TO EXPLORE</p>
          <a href="#contact" className="btn-view-all">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
