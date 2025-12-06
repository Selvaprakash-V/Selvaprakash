# MERN Portfolio Application

A modern, full-stack portfolio website built with MongoDB, Express, React, and Node.js.

## Features

- Responsive design with dark theme
- Dynamic project showcase
- About section with skills and interests
- Contact form with email notifications
- Certifications and achievements display
- Coding profile section
- Admin panel for content management
- RESTful API backend

## Tech Stack

**Frontend:**
- React.js 18
- React Router
- Axios for API calls
- React Icons
- CSS3 with animations
- Responsive design

**Backend:**
- Node.js
- Express.js 4
- MongoDB with Mongoose
- Nodemailer for email
- CORS enabled
- RESTful API

## Project Structure

```
├── frontend/              # React frontend application
│   ├── src/
│   │   ├── components/   # Reusable React components
│   │   ├── pages/        # Page components
│   │   ├── services/     # API service layer
│   │   ├── App.js        # Main app component
│   │   └── index.js      # Entry point
│   ├── public/           # Static files
│   └── package.json      # Frontend dependencies
│
├── backend/              # Express backend API
│   ├── config/          # Configuration files
│   ├── controllers/     # Route controllers
│   ├── models/          # Mongoose models
│   ├── routes/          # API routes
│   └── server.js        # Server entry point
│
├── assets/              # Static assets
│   └── images/          # Images, certificates, profile
│
├── config/              # Configuration files
│   ├── .env             # Environment variables
│   ├── .env.example     # Environment template
│   └── .gitignore       # Git ignore rules
│
├── docs/                # Documentation
│   ├── BACKEND.md       # Backend documentation
│   ├── FRONTEND.md      # Frontend documentation
│   ├── DATABASE.md      # Database setup guide
│   ├── EMAIL_SETUP.md   # Email configuration
│   └── MAPS_SETUP.md    # Maps integration guide
│
├── scripts/             # Utility scripts
│   ├── seed.js          # Database seeding
│   └── checkProjects.js # Project verification
│
└── package.json         # Root dependencies
```

## Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd selvaprakash
   ```

2. Install all dependencies:
   ```bash
   npm run install-all
   ```

3. Configure environment variables:
   ```bash
   cp config/.env.example config/.env
   ```
   
   Edit `config/.env` with your settings:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/portfolio
   NODE_ENV=development
   EMAIL_USER=your_gmail@gmail.com
   EMAIL_APP_PASSWORD=your_app_password
   RECIPIENT_EMAIL=your_email@gmail.com
   ```

4. Seed the database (optional):
   ```bash
   npm run seed
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

The backend will run on http://localhost:5000 and the frontend on http://localhost:3000.

## Available Scripts

- `npm run dev` - Run both frontend and backend concurrently
- `npm run server` - Run backend only (with nodemon)
- `npm run client` - Run frontend only
- `npm start` - Run production backend server
- `npm run install-all` - Install all dependencies
- `npm run seed` - Seed database with sample data
- `npm run check-projects` - Verify projects in database

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

## Dependencies

### Backend
- express - Web framework
- mongoose - MongoDB ODM
- cors - CORS middleware
- dotenv - Environment variables
- body-parser - Request body parsing
- nodemailer - Email sending
- nodemon - Development auto-reload
- concurrently - Run multiple commands

### Frontend
- react - UI library
- react-dom - React DOM rendering
- axios - HTTP client
- react-icons - Icon library
- react-scripts - React build tools

## License

ISC
