import React from 'react';
import './Certifications.css';
import CertificationCarousel from '../../components/CertificationCarousel/CertificationCarousel';
import { certifications } from '../../data';

const Certifications = () => {
  return (
    <section className="certifications-page">
      <div className="certifications-header">
        <h1>Certifications</h1>
        <p>Professional development and continuous learning</p>
      </div>

      <div className="certifications-content">
        {/* 3D Carousel Highlight */}
        <CertificationCarousel certificates={certifications} />
      </div>
    </section>
  );
};

export default Certifications;
