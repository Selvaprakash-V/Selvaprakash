import React from 'react';
import './ProgressiveBlur.css';

const ProgressiveBlur = ({ children, blurStrength = 'medium' }) => {
  return (
    <div className={`progressive-blur progressive-blur--${blurStrength}`}>
      <div className="progressive-blur__left"></div>
      <div className="progressive-blur__content">
        {children}
      </div>
      <div className="progressive-blur__right"></div>
    </div>
  );
};

export default ProgressiveBlur;
