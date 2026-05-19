import {
  SiC,
  SiCss3,
  SiExpress,
  SiFlask,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJupyter,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPowerbi,
  SiPython,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudiocode,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

export const aboutData = {
  title: 'A Glimpse Into My World',
  description: 'Learn more about who I am, what I do, and what inspires me.',
  skills: [
    { name: 'C', icon: <SiC />, category: 'languages' },
    { name: 'Java', icon: <FaJava />, category: 'languages' },
    { name: 'Python', icon: <SiPython />, category: 'languages' },
    { name: 'React', icon: <SiReact />, category: 'frontend' },
    { name: 'TypeScript', icon: <SiTypescript />, category: 'frontend' },
    { name: 'JavaScript', icon: <SiJavascript />, category: 'frontend' },
    { name: 'HTML5', icon: <SiHtml5 />, category: 'frontend' },
    { name: 'CSS3', icon: <SiCss3 />, category: 'frontend' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, category: 'frontend' },
    { name: 'Node.js', icon: <SiNodedotjs />, category: 'backend' },
    { name: 'Express.js', icon: <SiExpress />, category: 'backend' },
    { name: 'Spring Boot', icon: <SiSpringboot />, category: 'backend' },
    { name: 'Flask', icon: <SiFlask />, category: 'backend' },
    { name: 'MongoDB', icon: <SiMongodb />, category: 'database' },
    { name: 'MySQL', icon: <SiMysql />, category: 'database' },
    { name: 'Power BI', icon: <SiPowerbi />, category: 'tools' },
    { name: 'VS Code', icon: <SiVisualstudiocode />, category: 'tools' },
    { name: 'GitHub', icon: <SiGithub />, category: 'tools' },
    { name: 'Jupyter Notebook', icon: <SiJupyter />, category: 'tools' },
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
