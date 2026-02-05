import React from 'react';
import { codingProfiles } from '../../data';
import './CodingProfile.css';

const CodingProfile = () => {
  return (
    <section className="coding-profile-page">
      <div className="coding-profile-container">
        <div className="coding-profile-header">
          <span className="section-label">CODING PROFILES</span>
          <h1>Competitive Programming & Open Source</h1>
          <p>My journey across various competitive programming platforms and contributions to open source</p>
        </div>

        <div className="profiles-grid">
          {codingProfiles.map((profile, index) => (
            <a 
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="profile-card"
              style={{ '--profile-color': profile.color }}
            >
              <div className="profile-header">
                <span className="profile-icon">{profile.icon}</span>
                <div className="profile-info">
                  <h3>{profile.platform}</h3>
                  <p className="profile-username">{profile.username}</p>
                </div>
              </div>

              <div className="profile-stats">
                {Object.entries(profile.stats).map(([key, value]) => (
                  <div key={key} className="stat-item">
                    <span className="stat-value">{value}</span>
                    <span className="stat-label">{key}</span>
                  </div>
                ))}
              </div>

              <div className="profile-link">
                View Profile
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfile;
