# Backend - Express.js API

This directory contains the Express.js backend API for the MERN Portfolio application.

## Structure

```
backend/
└── server/                # Express application
    ├── config/           # Configuration files
    ├── controllers/      # Route controllers
    ├── models/          # MongoDB/Mongoose models
    ├── routes/          # API route definitions
    ├── server.js        # Main server file
    ├── seed.js          # Database seeding script
    └── checkProjects.js # Project verification script
```

## Development

To run the backend development server:

```bash
# From the root directory
npm run server

# Or from the backend/server directory
cd backend/server
node server.js
```

The API will run on http://localhost:5000

## API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### About
- `GET /api/about` - Get about information
- `POST /api/about` - Create/update about information

### Contact
- `POST /api/contact` - Submit contact form

## Models

- **Project** - Portfolio project schema
- **About** - About section content schema
- **Contact** - Contact form submission schema

## Configuration

- **emailConfig.js** - Email service configuration for contact form