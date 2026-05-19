import React, { useMemo, useState } from 'react';
import './CertificationsShowcase.css';
import { certifications } from '../../data';
import { FaArrowRight, FaBuilding, FaCalendarAlt, FaRegFilePdf } from 'react-icons/fa';
import { ImageSwiper } from '../../components/ui';

const Certifications = () => {
  const imageCertifications = useMemo(
    () => certifications.filter((certificate) => Boolean(certificate.image)),
    []
  );
  const certificateImages = useMemo(
    () => imageCertifications.map((certificate) => certificate.image),
    [imageCertifications]
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCertification = imageCertifications[activeIndex] || null;

  if (!activeCertification) {
    return (
      <section className="certifications-page">
        <div className="certifications-container">
          <div className="certifications-header">
            <h1>Certifications</h1>
            <p>Add certificate images to view this section.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="certifications-page">
      <div className="certifications-container">
        <div className="certifications-header">
          <h1>Certifications</h1>
          <p>Professional development and continuous learning</p>
        </div>

        <div className="certifications-content certifications-showcase">
          <div className="certification-preview-panel card">
            <div className="certification-preview-header">
              <div>
                <p className="certification-kicker">Certificate preview</p>
                <h2>{activeCertification.title}</h2>
              </div>
              <div className="certification-counter">
                {String(activeIndex + 1).padStart(2, '0')} / {String(imageCertifications.length).padStart(2, '0')}
              </div>
            </div>

            <div className="certification-preview-frame">
              <ImageSwiper
                images={certificateImages}
                cardWidth={620}
                cardHeight={400}
                onActiveChange={setActiveIndex}
                className="certificate-image-swiper"
              />
            </div>
          </div>

          <aside className="certification-detail-panel card">
            <p className="certification-kicker">Selected certification</p>
            <h3 className="certification-detail-title">{activeCertification.title}</h3>

            <div className="certification-meta-stack">
              <div className="certification-meta-row">
                <FaBuilding />
                <span>{activeCertification.provider}</span>
              </div>

              {activeCertification.instructor && (
                <div className="certification-meta-row">
                  <FaArrowRight />
                  <span>Instructor: {activeCertification.instructor}</span>
                </div>
              )}

              <div className="certification-meta-row">
                <FaCalendarAlt />
                <span>Completed: {activeCertification.completed}</span>
              </div>

              {activeCertification.extra && (
                <p className="certification-extra">{activeCertification.extra}</p>
              )}
            </div>

            <div className="certification-description-block">
              <p>
                This certification highlights hands-on learning and practical experience in{' '}
                {activeCertification.skills.slice(0, 3).join(', ')}.
              </p>
              <p>
                Swipe the certificate images on the left. This section now shows only image-based
                certificates from your new image folder.
              </p>
            </div>

            <div className="certification-skill-tags">
              {activeCertification.skills.map((skill) => (
                <span key={skill} className="certification-skill-tag">
                  {skill}
                </span>
              ))}
            </div>

            <a
              href={activeCertification.file}
              target="_blank"
              rel="noopener noreferrer"
              className="certification-view-link"
            >
              View full certificate <FaRegFilePdf />
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
