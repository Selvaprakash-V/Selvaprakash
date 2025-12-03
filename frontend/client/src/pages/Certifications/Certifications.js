import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: 'Machine Learning using Python Programming',
      provider: 'Udemy',
      year: '2025',
      icon: '🤖',
      category: 'Machine Learning'
    },
    {
      title: 'Complete Web Development Course (Basic To Advanced)',
      provider: 'Udemy',
      year: '2025',
      icon: '🌐',
      category: 'Web Development'
    },
    {
      title: 'Python for Data Science',
      provider: 'Udemy',
      year: '2025',
      icon: '🐍',
      category: 'Data Science'
    },
    {
      title: 'Power BI Mastery',
      provider: 'Udemy',
      year: '2025',
      icon: '📊',
      category: 'Business Intelligence'
    },
    {
      title: 'Data Visualization with Power BI',
      provider: 'Great Learning',
      year: '2025',
      icon: '📈',
      category: 'Data Visualization'
    },
    {
      title: 'Python Programming Masterclass',
      provider: 'Udemy',
      year: '2025',
      icon: '💻',
      category: 'Programming'
    },
    {
      title: 'MySQL Database Development and Administration using C and C++',
      provider: 'Udemy',
      year: '2024',
      icon: '🗄️',
      category: 'Database'
    },
    {
      title: 'Prompt Engineering Zero To Hero',
      provider: 'Udemy',
      year: '2024',
      icon: '🚀',
      category: 'AI/ML'
    },
    {
      title: 'C++ Training - Spoken Tutorials',
      provider: 'IIT Bombay',
      year: '2024',
      icon: '⚡',
      category: 'Programming'
    },
    {
      title: 'C for Beginners',
      provider: 'Great Learning',
      year: '2024',
      icon: '©️',
      category: 'Programming'
    }
  ];

  const achievements = [
    {
      title: 'Freshdesku Competition',
      description: 'Secured 2nd place',
      year: '2025',
      icon: '🥈'
    },
    {
      title: 'Createthon Competition',
      description: 'Secured 3rd place',
      year: '2024',
      icon: '🥉'
    },
    {
      title: 'CodeLog Competition',
      description: 'Achieved 3rd place (Skillrack) during first semester',
      year: '2024',
      icon: '🏆'
    },
    {
      title: 'CodeLog Competition',
      description: 'Achieved 2nd place (Skillrack) during second semester',
      year: '2025',
      icon: '🥈'
    },
    {
      title: 'SICPC Contest',
      description: 'Participated and qualified up to regional round',
      year: '2025',
      icon: '🎯'
    }
  ];

  const groupedCerts = certifications.reduce((acc, cert) => {
    if (!acc[cert.category]) {
      acc[cert.category] = [];
    }
    acc[cert.category].push(cert);
    return acc;
  }, {});

  return (
    <section className="certifications-page">
      <div className="certifications-header">
        <span className="section-label">PROFESSIONAL DEVELOPMENT</span>
        <h1>Certifications & Achievements</h1>
        <p>Continuous learning and recognition of excellence</p>
      </div>

      <div className="certifications-content">
        {/* Certifications Section */}
        <div className="certs-section">
          <h2 className="section-title">
            <span className="title-icon">📜</span>
            Professional Certifications
          </h2>
          
          {Object.entries(groupedCerts).map(([category, certs]) => (
            <div key={category} className="cert-category">
              <h3 className="category-title">{category}</h3>
              <div className="certs-grid">
                {certs.map((cert, index) => (
                  <div key={index} className="cert-card">
                    <div className="cert-icon">{cert.icon}</div>
                    <div className="cert-content">
                      <h4 className="cert-title">{cert.title}</h4>
                      <div className="cert-meta">
                        <span className="cert-provider">{cert.provider}</span>
                        <span className="cert-year">{cert.year}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="achievements-section">
          <h2 className="section-title">
            <span className="title-icon">🏆</span>
            Competition Achievements
          </h2>
          
          <div className="achievements-timeline">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-item">
                <div className="achievement-icon-wrapper">
                  <span className="achievement-icon">{achievement.icon}</span>
                </div>
                <div className="achievement-content">
                  <h4 className="achievement-title">{achievement.title}</h4>
                  <p className="achievement-description">{achievement.description}</p>
                  <span className="achievement-year">{achievement.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
