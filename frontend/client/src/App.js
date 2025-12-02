import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ParticleBackground from './components/ParticleBackground/ParticleBackground';
import Hero from './components/Hero/Hero';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import CodingProfile from './pages/CodingProfile/CodingProfile';
import Contact from './pages/Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <ParticleBackground />
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="coding-profile">
        <CodingProfile />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
