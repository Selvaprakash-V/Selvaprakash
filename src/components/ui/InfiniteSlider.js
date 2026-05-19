import React from 'react';
import './InfiniteSlider.css';

const InfiniteSlider = ({ children, speed = 28, hoverSpeed = 48 }) => {
  const baseDuration = Math.max(16, 120 / speed);
  const hoverDuration = Math.max(baseDuration + 6, 120 / hoverSpeed);

  return (
    <div
      className="infinite-slider"
      style={{
        '--slider-duration': `${baseDuration}s`,
        '--slider-hover-duration': `${hoverDuration}s`
      }}
    >
      <div className="infinite-slider__track">
        <div className="infinite-slider__group">{children}</div>
        <div className="infinite-slider__group" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
};

export default InfiniteSlider;
