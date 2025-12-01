# MERN Portfolio Application

A modern, full-stack portfolio website built with MongoDB, Express, React, and Node.js.

## Features

- Responsive design with dark theme
- Dynamic project showcase
- About section with skills and interests
- Contact form
- Admin panel for content management
- RESTful API backend

## Tech Stack

**Frontend:**
- React.js
- React Router
- CSS3 with animations
- Responsive design

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- RESTful API

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm run install-all
   ```

3. Create a `.env` file in the root directory:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/portfolio
   NODE_ENV=development
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The server will run on http://localhost:5000 and the client on http://localhost:3000.

## Project Structure

```
├── client/                 # React frontend
│   ├── public/
│   └── src/
│       ├── components/     # Reusable components
│       ├── pages/          # Page components
│       ├── services/       # API services
│       ├── assets/         # Images, icons
│       └── styles/         # CSS files
│
├── server/                 # Express backend
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── controllers/        # Route controllers
│   └── server.js           # Entry point
│
└── package.json
```

## Available Scripts

- `npm run dev` - Run both frontend and backend
- `npm run server` - Run backend only
- `npm run client` - Run frontend only
- `npm start` - Run production server
