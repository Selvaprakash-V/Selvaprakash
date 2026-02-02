import React, { useState } from 'react';
import './CodingProfile.css';

const CodingProfile = () => {
  const [profiles] = useState([
    {
      platform: 'LeetCode',
      icon: '🟠',
      username: '@SelvaprakashV',
      stats: {
        solved: '500+',
        rank: 'Top 5%',
        rating: '2100'
      },
      url: 'https://leetcode.com/u/SelvaprakashV/',
      color: '#FFA116'
    },
    {
      platform: 'GitHub',
      icon: '',
      username: '@Selvaprakash-V',
      stats: {
        repos: '50+',
        stars: '1.2k',
        contributions: '2000+'
      },
      url: 'https://github.com/Selvaprakash-V',
      color: '#fff'
    },
    {
      platform: 'HackerRank',
      icon: '',
      username: '@selvaprakashv007',
      stats: {
        stars: '5 stars',
        rank: 'Gold',
        badges: '25+'
      },
      url: 'https://www.hackerrank.com/profile/selvaprakashv007',
      color: '#2EC866'
    },
    {
      platform: 'CodeChef',
      icon: '🟤',
      username: '@selvaprakashv',
      stats: {
        rating: '1850',
        stars: '4 stars',
        rank: 'Global 5k'
      },
      url: 'https://www.codechef.com/users/selvaprakashv',
      color: '#5B4638'
    },
    {
      platform: 'Codeforces',
      icon: '🔵',
      username: '@SelvaprakashV',
      stats: {
        rating: '1600',
        rank: 'Expert',
        contests: '50+'
      },
      url: 'https://codeforces.com/profile/SelvaprakashV',
      color: '#1F8ACB'
    },
    {
      platform: 'LinkedIn',
      icon: '',
      username: '@selvaprakashv007',
      stats: {
        connections: '500+',
        posts: '50+',
        followers: '1k+'
      },
      url: 'https://www.linkedin.com/in/selvaprakashv007/',
      color: '#0A66C2'
    },
    {
      platform: 'GeeksforGeeks',
      icon: '',
      username: '@GeeksforGeeks',
      stats: {
        problems: '300+',
        score: '1500',
        rank: 'Top 10%'
      },
      url: 'https://www.geeksforgeeks.org/user/GeeksforGeeks',
      color: '#2F8D46'
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
