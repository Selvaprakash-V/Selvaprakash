const About = require('../models/About');

// Get about info
exports.getAbout = async (req, res) => {
  try {
    let about = await About.findOne();
    if (!about) {
      // Create default about if doesn't exist
      about = new About({
        title: 'Building Scalable Software Solutions',
        subtitle: 'Senior Software Engineer specializing in full-stack development',
        description: 'I build robust, scalable applications that solve complex business challenges.',
        skills: [
          { name: 'React Native', category: 'frontend' },
          { name: 'Vue.js', category: 'frontend' },
          { name: 'Next.js', category: 'frontend' },
          { name: 'Jest', category: 'frontend' },
          { name: 'Prisma ORM', category: 'backend' },
          { name: 'TypeORM', category: 'backend' },
          { name: 'MongoDB', category: 'database' },
          { name: 'Firebase', category: 'database' },
        ],
        interests: [
          { name: 'Traveling', icon: '' },
          { name: 'Basketball', icon: '🏀' },
          { name: 'Running', icon: '🏃' },
          { name: 'Gaming', icon: '🎮' },
          { name: 'Music', icon: '🎵' },
          { name: 'Reading', icon: '📚' },
        ],
        availability: 'Available for new projects',
      });
      await about.save();
    }
    res.json(about);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update about info
exports.updateAbout = async (req, res) => {
  try {
    let about = await About.findOne();
    if (!about) {
      about = new About(req.body);
    } else {
      Object.assign(about, req.body);
      about.updatedAt = Date.now();
    }
    await about.save();
    res.json(about);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
