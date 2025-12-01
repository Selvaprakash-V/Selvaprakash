import React, { useState } from 'react';
import './CodingProfile.css';

const CodingProfile = () => {
  const [profiles] = useState([
    {
      platform: 'LeetCode',
      icon: '🟠',
      username: '@yourname',
      stats: {
        solved: '500+',
        rank: 'Top 5%',
        rating: '2100'
      },
      url: 'https://leetcode.com/yourname',
      color: '#FFA116'
    },
    {
      platform: 'GitHub',
      icon: '⚫',
      username: '@yourname',
      stats: {
        repos: '50+',
        stars: '1.2k',
        contributions: '2000+'
      },
      url: 'https://github.com/yourname',
      color: '#fff'
    },
    {
      platform: 'HackerRank',
      icon: '🟢',
      username: '@yourname',
      stats: {
        stars: '5 ⭐',
        rank: 'Gold',
        badges: '25+'
      },
      url: 'https://hackerrank.com/yourname',
      color: '#2EC866'
    },
    {
      platform: 'CodeChef',
      icon: '🟤',
      username: '@yourname',
      stats: {
        rating: '1850',
        stars: '4 ⭐',
        rank: 'Global 5k'
      },
      url: 'https://codechef.com/users/yourname',
      color: '#5B4638'
    },
    {
      platform: 'Codeforces',
      icon: '🔵',
      username: '@yourname',
      stats: {
        rating: '1600',
        rank: 'Expert',
        contests: '50+'
      },
      url: 'https://codeforces.com/profile/yourname',
      color: '#1F8ACB'
    },
    {
      platform: 'Stack Overflow',
      icon: '🟧',
      username: '@yourname',
      stats: {
        reputation: '5k+',
        gold: '10',
        answers: '100+'
      },
      url: 'https://stackoverflow.com/users/yourname',
      color: '#F48024'
    }
  ]);

  return (
    <section className="coding-profile-page">
      <div className="coding-profile-container">
        <div className="coding-profile-header">
          <span className="section-label">CODING PROFILES</span>
          <h1>Competitive Programming & Open Source</h1>
          <p>My journey across various competitive programming platforms and contributions to open source</p>
        </div>

        <div className="profiles-grid">
          {profiles.map((profile, index) => (
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
                View Profile →
              </div>
            </a>
          ))}
        </div>

        <div className="coding-achievements">
          <h2>Notable Achievements</h2>
          <div className="achievements-grid">
            <div className="achievement-card">
              <span className="achievement-icon">🏆</span>
              <h3>Contest Winner</h3>
              <p>Won multiple coding competitions and hackathons</p>
            </div>
            <div className="achievement-card">
              <span className="achievement-icon">⭐</span>
              <h3>Top Contributor</h3>
              <p>Active contributor to popular open source projects</p>
            </div>
            <div className="achievement-card">
              <span className="achievement-icon">📈</span>
              <h3>Problem Solver</h3>
              <p>Solved 1000+ algorithmic challenges across platforms</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingProfile;
