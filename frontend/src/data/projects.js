export const projects = [
  {
    id: '1',
    title: "Student Attendance System",
    description: "Enterprise-grade attendance management system with role-based access control, automated notifications, and comprehensive analytics. Features real-time tracking, performance monitoring, and RESTful API integration.",
    company: "Academic Project",
    duration: "Full-Stack • Enterprise Application",
    technologies: [
      "Spring Boot 3",
      "Java",
      "MySQL",
      "Spring Security",
      "Thymeleaf",
      "Bootstrap 5",
      "Spring Data JPA",
      "Maven",
      "REST API"
    ],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=500&fit=crop",
    liveUrl: "https://attendance-system-demo.herokuapp.com",
    githubUrl: "https://github.com/selvaprakash/student-attendance-system",
    featured: true
  },
  {
    id: '2',
    title: "Diabetes Prediction & Health Assistant",
    description: "AI-powered diabetes risk prediction system with personalized meal planning, health insights, and PDF reports using Random Forest ML model. Features interactive health dashboard with real-time predictions.",
    company: "Personal Project",
    duration: "Machine Learning • Healthcare",
    technologies: [
      "React",
      "Flask",
      "Python",
      "scikit-learn",
      "Random Forest",
      "Tailwind CSS",
      "Framer Motion",
      "ReportLab",
      "Recharts"
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
    liveUrl: "https://diabetes-prediction-demo.vercel.app",
    githubUrl: "https://github.com/selvaprakash/diabetes-prediction",
    featured: true
  },
  {
    id: '3',
    title: "RechargeX - Mobile Recharge Platform",
    description: "A full-stack mobile recharge platform built with the MERN stack. Features include user authentication with JWT, real-time plan browsing across multiple telecom operators (Airtel, Jio, Vi, BSNL), instant recharge processing, transaction history tracking, and a comprehensive admin dashboard.",
    company: "Personal Project",
    duration: "Full-Stack • MERN",
    technologies: [
      "React 19",
      "Node.js",
      "MongoDB",
      "Express.js",
      "JWT",
      "Tailwind CSS",
      "Vite",
      "React Hook Form"
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    liveUrl: "https://rechargex-backend2.onrender.com",
    githubUrl: "https://github.com/selvaprakash/rechargex",
    featured: true
  },
  {
    id: '4',
    title: "Smart Task Manager",
    description: "Intelligent task management application with AI-powered priority suggestions, deadline tracking, and team collaboration features. Includes analytics dashboard and productivity insights.",
    company: "Personal Project",
    duration: "Productivity • Web App",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "GraphQL",
      "Chakra UI"
    ],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop",
    liveUrl: "https://smart-tasks-app.vercel.app",
    githubUrl: "https://github.com/selvaprakash/smart-task-manager",
    featured: false
  }
];

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getAllProjects = () => projects;
