import React from 'react';
import './InterestCard.css';

const InterestCard = ({ name, icon }) => {
  return (
    <div className="interest-card">
      <span className="interest-icon">{icon}</span>
      <span className="interest-name">{name}</span>
    </div>
  );
};

export default InterestCard;
