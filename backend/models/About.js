const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    default: 'Building Scalable Software Solutions',
  },
  subtitle: {
    type: String,
    default: 'Senior Software Engineer specializing in full-stack development',
  },
  description: {
    type: String,
    required: true,
  },
  skills: [{
    name: String,
    category: String, // frontend, backend, database, tools
  }],
  interests: [{
    name: String,
    icon: String,
  }],
  location: {
    type: String,
    default: '',
  },
  availability: {
    type: String,
    default: 'Available for new projects',
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('About', aboutSchema);
