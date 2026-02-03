import React from 'react';
import { contactInfo } from '../../data';
import './SocialLinks.css';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: contactInfo.social.github,
      description: 'Check out my open source projects and contributions',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      url: contactInfo.social.linkedin,
      description: 'Connect with me professionally',
      color: '#0A66C2'
    },
    {
      name: 'LeetCode',
      url: contactInfo.social.leetcode,
      description: 'View my competitive programming profile',
      color: '#FFA116'
    },
    {
      name: 'Email',
      url: `mailto:${contactInfo.email}`,
      description: 'Get in touch via email',
      color: '#EA4335'
    }
  ];

  return (
    <section className="social-links-page">
      <div className="social-links-header">
        <h1>Social Links</h1>
        <p>Connect with me on various platforms</p>
      </div>

      <div className="social-links-grid">
        {socialLinks.map((link, index) => (
          <a 
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link-card"
            style={{ '--link-color': link.color }}
          >
            <h3>{link.name}</h3>
            <p>{link.description}</p>
            <span className="link-arrow">Visit</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialLinks;
