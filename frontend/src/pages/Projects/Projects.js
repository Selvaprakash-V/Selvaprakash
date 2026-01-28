import React, { useState, useEffect } from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { projectService } from '../../services/api';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await projectService.getAll();
      setProjects(response.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      // Sample data for fallback
      setProjects([
        {
          _id: '1',
          title: "Women's Professional Leagues",
          description: 'A comprehensive platform for women\'s professional sports leagues',
          company: 'DELTATRE CORP',
          duration: 'Jun 2025 - Sep 2025',
          technologies: ['React', 'Node.js', 'MongoDB'],
          image: '',
          liveUrl: '#',
        },
        {
          _id: '2',
          title: "Diabetes Prediction & Health Assistant",
          description: 'AI-powered diabetes risk prediction system with personalized meal planning, health insights, and PDF reports using Random Forest ML model.',
          company: 'Personal Project',
          duration: 'Machine Learning • Healthcare',
          technologies: ['React', 'Flask', 'Python', 'scikit-learn', 'Random Forest', 'Tailwind CSS', 'Framer Motion', 'ReportLab', 'Recharts'],
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
          liveUrl: '#',
          githubUrl: '#',
        },
      ]);
    }
  };

  if (loading) {
    return <div className="loading">Loading projects...</div>;
  }

  return (
    <section className="projects-page">
      <div className="projects-header">
        <h1>Projects</h1>
        <p>Explore my recent work and contributions</p>
      </div>

      {projects.length > 0 ? (
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
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
