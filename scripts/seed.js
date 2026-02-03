const mongoose = require('mongoose');
const Project = require('../backend/models/Project');
require('dotenv').config({ path: '../config/.env' });

const projects = [
  {
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
    featured: true,
    order: 1
  },
  {
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
    featured: true,
    order: 2
  },
  {
    title: "RechargeX - Mobile Recharge Platform",
    description: "A full-stack mobile recharge platform built with the MERN stack. Features include user authentication with JWT, real-time plan browsing across multiple telecom operators (Airtel, Jio, Vi, BSNL), instant recharge processing, transaction history tracking, and a comprehensive admin dashboard for managing plans, users, and transactions.",
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
    featured: true,
    order: 3
  },
  {
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
    featured: false,
    order: 4
  }
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('✅ Connected to MongoDB');

    // Clear existing projects
    await Project.deleteMany({});
    console.log('Cleared existing projects');

    // Insert new projects
    const insertedProjects = await Project.insertMany(projects);
    console.log(`✅ Successfully seeded ${insertedProjects.length} projects:`);
    insertedProjects.forEach(project => {
      console.log(`   - ${project.title}`);
    });

    // Close connection
    await mongoose.connection.close();
    console.log('✅ Database connection closed');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
