import React from 'react';
import Hero from '../../components/Hero/Hero';
import SkillsSlider from '../../components/SkillsSlider/SkillsSlider';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <SkillsSlider />
    </div>
  );
};

export default Home;
