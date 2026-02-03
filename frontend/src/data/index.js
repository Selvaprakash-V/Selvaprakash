// Central data exports for the portfolio
export { projects, getAllProjects, getFeaturedProjects } from './projects';
export { aboutData, getAboutData, getSkillsByCategory } from './about';
export { codingProfiles, getCodingProfiles } from './codingProfiles';
export { certifications, getCertifications } from './certifications';

// Contact info (static since we're removing backend)
export const contactInfo = {
  email: 'selvaprakashv007@gmail.com',
  phone: '+91 9876543210',
  location: 'Coimbatore, Tamil Nadu, India',
  social: {
    github: 'https://github.com/Selvaprakash-V',
    linkedin: 'https://www.linkedin.com/in/selvaprakashv007/',
    leetcode: 'https://leetcode.com/u/SelvaprakashV/'
  }
};
