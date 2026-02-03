export const aboutData = {
  title: 'A Glimpse Into My World',
  description: 'Learn more about who I am, what I do, and what inspires me.',
  skills: [
    { name: 'React', icon: '', category: 'frontend' },
    { name: 'React Native', icon: '', category: 'frontend' },
    { name: 'Next.js', icon: '', category: 'frontend' },
    { name: 'Vue.js', icon: '', category: 'frontend' },
    { name: 'TypeScript', icon: '', category: 'frontend' },
    { name: 'Tailwind CSS', icon: '', category: 'frontend' },
    { name: 'Node.js', icon: '', category: 'backend' },
    { name: 'Express.js', icon: '', category: 'backend' },
    { name: 'Spring Boot', icon: '', category: 'backend' },
    { name: 'Python', icon: '', category: 'backend' },
    { name: 'Flask', icon: '', category: 'backend' },
    { name: 'Java', icon: '', category: 'backend' },
    { name: 'MongoDB', icon: '', category: 'database' },
    { name: 'MySQL', icon: '', category: 'database' },
    { name: 'PostgreSQL', icon: '', category: 'database' },
    { name: 'Firebase', icon: '', category: 'database' },
  ],
  interests: [
    { name: 'Traveling', icon: '' },
    { name: 'Basketball', icon: '' },
    { name: 'Running', icon: '' },
    { name: 'Gaming', icon: '' },
    { name: 'Music', icon: '' },
    { name: 'Reading', icon: '' },
  ],
  book: {
    title: 'Atomic Habits',
    subtitle: 'Tiny Changes, Remarkable Results'
  }
};

export const getAboutData = () => aboutData;
export const getSkillsByCategory = (category) => aboutData.skills.filter(s => s.category === category);
