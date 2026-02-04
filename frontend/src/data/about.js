export const aboutData = {
  title: 'A Glimpse Into My World',
  description: 'Learn more about who I am, what I do, and what inspires me.',
  skills: [
    { name: 'C', icon: '', category: 'languages' },
    { name: 'Java', icon: '', category: 'languages' },
    { name: 'Python', icon: '', category: 'languages' },
    { name: 'React', icon: '', category: 'frontend' },
    { name: 'TypeScript', icon: '', category: 'frontend' },
    { name: 'JavaScript', icon: '', category: 'frontend' },
    { name: 'HTML5', icon: '', category: 'frontend' },
    { name: 'CSS3', icon: '', category: 'frontend' },
    { name: 'Tailwind CSS', icon: '', category: 'frontend' },
    { name: 'Node.js', icon: '', category: 'backend' },
    { name: 'Express.js', icon: '', category: 'backend' },
    { name: 'Spring Boot', icon: '', category: 'backend' },
    { name: 'Flask', icon: '', category: 'backend' },
    { name: 'MongoDB', icon: '', category: 'database' },
    { name: 'MySQL', icon: '', category: 'database' },
    { name: 'Power BI', icon: '', category: 'tools' },
    { name: 'VS Code', icon: '', category: 'tools' },
    { name: 'GitHub', icon: '', category: 'tools' },
    { name: 'Jupyter Notebook', icon: '', category: 'tools' },
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
