import React from 'react';
import './LocationMap.css';

const LocationMap = () => {
  // Your location coordinates
  const location = {
    lat: 10.826032,
    lng: 77.060364,
    name: 'India',
    country: 'coimbatore',
    plusCode: 'R3F6+XG7'
  };

  return (
    <div className="world-map-container">
      <div className="map-card">
        {/* World Map - Zoomed out to show global view */}
        <div className="world-map-wrapper">
          <iframe
            className="world-map-frame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d290.8492627265851!2d77.06051617829496!3d10.82576209951566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba84ee37569ae7f%3A0x3c5b1824b6e79192!2sSri%20Eshwar%20College%20of%20Engineering%2C%20Coimbatore!5e1!3m2!1sen!2sin!4v1764734877243!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sri Eshwar College - India"
          />
          
          {/* Profile Avatar Marker */}
          <div className="avatar-marker">
            <div className="avatar-glow"></div>
            <div className="avatar-circle">
              <span className="avatar-emoji">👨‍💻</span>
            </div>
          </div>
        </div>

        {/* Location Details */}
        <div className="location-details">
          <div className="location-info">
            <div className="location-pin-icon">📍</div>
            <div className="location-text">
              <h3>{location.name}</h3>
              <p>{location.country}</p>
            </div>
          </div>
          
          <a 
            href={`https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="view-map-btn"
          >
            View Location →
          </a>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
