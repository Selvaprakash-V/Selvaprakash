import React, { useState } from 'react';
import { contactInfo } from '../../data';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    // Create mailto link for contact form submission
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    
    setStatus({ type: 'success', message: 'Opening your email client...' });
    setFormData({ name: '', email: '', message: '' });
    setLoading(false);
  };

  return (
    <section className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1>Contact</h1>
          <p>Have a project in mind? I'm happy to discuss your technical requirements.</p>
        </div>

        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <span>{contactInfo.location}</span>
          </div>
          <div className="contact-socials">
            <a href={contactInfo.social.github} target="_blank" rel="noopener noreferrer" className="social-link">
              GitHub
            </a>
            <a href={contactInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
              LinkedIn
            </a>
            <a href={contactInfo.social.leetcode} target="_blank" rel="noopener noreferrer" className="social-link">
              LeetCode
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          {status.message && (
            <div className={`status-message ${status.type}`}>
              {status.message}
            </div>
          )}

          <button type="submit" className="btn-submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
