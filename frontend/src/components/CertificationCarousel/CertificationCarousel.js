import React, { useState, useMemo } from 'react';
import './CertificationCarousel.css';

const CertificationCarousel = ({ certificates, visible = 5 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const extendedCertificates = useMemo(() => {
    if (!certificates || certificates.length === 0) return [];
    return [...certificates, ...certificates, ...certificates];
  }, [certificates]);

  const baseIndex = useMemo(() => {
    if (!certificates || certificates.length === 0) return 0;
    const offset = certificates.length; // middle chunk start
    return offset + activeIndex;
  }, [activeIndex, certificates]);

  const handlePrev = () => {
    setActiveIndex((prev) =>
      (prev - 1 + (certificates?.length || 1)) % (certificates?.length || 1)
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      (prev + 1) % (certificates?.length || 1)
    );
  };

  if (!certificates || certificates.length === 0) return null;

  const maxVisible = Math.min(visible, certificates.length);

  return (
    <div className="cert-carousel-wrapper">
      <div className="cert-carousel-header">
        <h2>Featured Certifications</h2>
        <p>Hover, tilt and navigate through key achievements</p>
      </div>

      <div className="cert-carousel-container">
        <button
          className="cert-carousel-nav cert-carousel-nav-left"
          onClick={handlePrev}
          aria-label="Previous certification"
        >
          &#10094;
        </button>

        <div className="cert-carousel-viewport">
          <div className="cert-carousel-3d">
            {extendedCertificates.map((cert, index) => {
              const position = index - baseIndex;

              if (Math.abs(position) > maxVisible) return null;

              const depth = Math.abs(position);
              const translateX = position * 160;
              const rotateY = position * -18;
              const translateZ = -depth * 80;
              const scale = 1 - depth * 0.08;
              const opacity = 1 - depth * 0.18;

              const zIndex = maxVisible - depth;

              return (
                <a
                  key={`${cert.id}-${index}`}
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`cert-carousel-card ${
                    position === 0 ? 'cert-carousel-card-active' : ''
                  }`}
                  style={{
                    transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                    opacity,
                    zIndex,
                  }}
                >
                  <div className="cert-carousel-tilt-layer">
                    <div className="cert-carousel-badge">{cert.provider}</div>
                    <h3 className="cert-carousel-title">{cert.title}</h3>
                    {cert.completed && (
                      <p className="cert-carousel-meta">Completed: {cert.completed}</p>
                    )}
                    {cert.instructor && (
                      <p className="cert-carousel-meta">Instructor: {cert.instructor}</p>
                    )}
                    {cert.extra && (
                      <p className="cert-carousel-extra">{cert.extra}</p>
                    )}
                    {cert.skills && (
                      <div className="cert-carousel-skills">
                        {cert.skills.slice(0, 3).map((skill, i) => (
                          <span key={i} className="cert-carousel-skill-tag">
                            {skill}
                          </span>
                        ))}
                        {cert.skills.length > 3 && (
                          <span className="cert-carousel-skill-more">
                            +{cert.skills.length - 3} more
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <button
          className="cert-carousel-nav cert-carousel-nav-right"
          onClick={handleNext}
          aria-label="Next certification"
        >
          &#10095;
        </button>
      </div>

      <div className="cert-carousel-dots">
        {certificates.map((cert, index) => (
          <button
            key={cert.id}
            className={`cert-carousel-dot ${
              index === activeIndex ? 'cert-carousel-dot-active' : ''
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to ${cert.title}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CertificationCarousel;
