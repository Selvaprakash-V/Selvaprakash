# Selvaprakash V - Portfolio Website

A modern, responsive portfolio website built with React.js showcasing my projects, skills, certifications, and coding profiles.

## Live Demo

Visit the live site: [selvaprakash-portfolio.vercel.app](https://selvaprakash-portfolio.vercel.app)

## Features

- **Responsive Design** - Fully responsive with dark theme
- **Project Showcase** - Dynamic project gallery with live demos
- **About Section** - Skills, interests, and toolbox display
- **Certifications** - 3D carousel of professional certifications
- **Coding Profiles** - Links to competitive programming profiles
- **Contact Form** - Easy-to-use contact functionality
- **Smooth Animations** - Modern CSS animations and transitions

## Tech Stack

- **React.js 18** - Frontend framework
- **React Icons** - Icon library
- **CSS3** - Styling with animations
- **Static Data** - No backend required

## Project Structure

```
├── frontend/
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   │   ├── Hero/
│   │   │   ├── Navbar/
│   │   │   ├── ProjectCard/
│   │   │   ├── SkillCard/
│   │   │   ├── InterestCard/
│   │   │   ├── LocationMap/
│   │   │   ├── CertificationCarousel/
│   │   │   └── ParticleBackground/
│   │   ├── pages/         # Page components
│   │   │   ├── Home/
│   │   │   ├── About/
│   │   │   ├── Projects/
│   │   │   ├── Certifications/
│   │   │   ├── CodingProfile/
│   │   │   └── Contact/
│   │   ├── data/          # Static data files
│   │   │   ├── projects.js
│   │   │   ├── about.js
│   │   │   ├── certifications.js
│   │   │   ├── codingProfiles.js
│   │   │   └── index.js
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   │   └── images/        # Static images
│   └── package.json
│
└── package.json           # Root scripts
```

## Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Selvaprakash-V/Selvaprakash.git
   cd Selvaprakash
   ```

2. **Install dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
cd frontend
npm run build
```

The build output will be in `frontend/build/` folder, ready for deployment.

## Deployment

This project can be easily deployed to:

- **Vercel** - Connect GitHub repo for automatic deployments
- **Netlify** - Drag and drop build folder or connect repo
- **GitHub Pages** - Use `gh-pages` package
- **Firebase Hosting** - `firebase deploy`

## Contact

- **Email**: selvaprakashv007@gmail.com
- **LinkedIn**: [linkedin.com/in/selvaprakashv007](https://www.linkedin.com/in/selvaprakashv007/)
- **GitHub**: [github.com/Selvaprakash-V](https://github.com/Selvaprakash-V)
- **LeetCode**: [leetcode.com/u/SelvaprakashV](https://leetcode.com/u/SelvaprakashV/)

---

⭐ If you like this portfolio, give it a star!
