const mongoose = require('mongoose');
const Project = require('../backend/models/Project');
require('dotenv').config({ path: '../config/.env' });

async function checkProjects() {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio');
    console.log('✅ Connected to MongoDB');

    const projects = await Project.find();
    console.log(`\nFound ${projects.length} projects in database:\n`);
    
    projects.forEach((project, index) => {
      console.log(`${index + 1}. ${project.title}`);
      console.log(`   - ID: ${project._id}`);
      console.log(`   - Technologies: ${project.technologies.join(', ')}`);
      console.log(`   - Featured: ${project.featured}`);
      console.log('');
    });

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

checkProjects();
