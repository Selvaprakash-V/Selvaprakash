# Frontend - React Application

This directory contains the React.js frontend for the MERN Portfolio application.

## Structure

```
frontend/
└── client/                 # React application
    ├── public/            # Static files
    ├── src/
    │   ├── components/    # Reusable React components
    │   ├── pages/         # Page components
    │   ├── services/      # API service functions
    │   └── styles/        # CSS files
    └── package.json       # Frontend dependencies
```

## Development

To run the frontend development server:

```bash
# From the root directory
npm run client

# Or from the frontend/client directory
cd frontend/client
npm start
```

The application will run on http://localhost:3000

## Components

- **Hero** - Landing page hero section
- **Navbar** - Navigation component
- **ProjectCard** - Individual project display
- **SkillCard** - Skill display component
- **InterestCard** - Interest display component
- **ParticleBackground** - Animated background
- **LocationMap** - Interactive map component

## Pages

- **Home** - Landing page
- **About** - About section with skills and interests
- **Projects** - Portfolio projects showcase
- **Contact** - Contact form
- **CodingProfile** - Coding profile information