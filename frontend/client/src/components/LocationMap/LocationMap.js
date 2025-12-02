import React from 'react';
import './LocationMap.css';

const LocationMap = () => {
  // Your location coordinates
  const location = {
    lat: 10.826032,
    lng: 77.060364,
    name: 'Kondampatty, Tamil Nadu',
    country: 'India',
    plusCode: 'R3F6+XG7'
  };

  return (
    <div className="world-map-container">
      <div className="map-card">
        {/* World Map - Zoomed out to show global view */}
        <div className="world-map-wrapper">
          <iframe
            className="world-map-frame"
            src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d25000000!2d78.0!3d20.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin`}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="World Location Map"
          ></iframe>
          
          {/* Profile Avatar Marker */}
          <div className="avatar-marker">
            <div className="avatar-glow"></div>
            <div className="avatar-circle">
              <span className="avatar-emoji">👨‍💻</span>
            </div>
          </div>

          {/* Available Badge */}
          <div className="availability-badge">
            <span className="status-dot">🌐</span>
            <span>Available Internationally</span>
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
