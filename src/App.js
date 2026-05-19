import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ParticleBackground from './components/ParticleBackground/ParticleBackground';
import Hero from './components/Hero/Hero';
import SkillsSlider from './components/SkillsSlider/SkillsSlider';
import Projects from './pages/Projects/Projects';
import CodingProfile from './pages/CodingProfile/CodingProfile';
import Certifications from './pages/Certifications/Certifications';
import SocialLinks from './pages/SocialLinks/SocialLinks';
import Resume from './pages/Resume/Resume';
import './App.css';

function App() {
  return (
    <div className="App">
      <ParticleBackground />
      <Navbar />
      <div id="home">
        <Hero />
        <SkillsSlider />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="certifications">
        <Certifications />
      </div>
      <div id="coding-profile">
        <CodingProfile />
      </div>
      <div id="social-links">
        <SocialLinks />
      </div>
      <div id="resume">
        <Resume />
      </div>
    </div>
  );
}

export default App;
