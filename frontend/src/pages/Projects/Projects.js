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
    </section>
  );
};

export default Projects;
