# Database Setup

This directory contains database-related configurations and documentation for the MERN Portfolio application.

## MongoDB Configuration

The application uses MongoDB as the database. Make sure you have MongoDB installed and running.

### Connection String
The application connects to MongoDB using the connection string defined in the `.env` file:
```
MONGODB_URI=mongodb://localhost:27017/portfolio
```

### Database Schema

The application uses the following collections:

1. **projects** - Stores portfolio project information
2. **about** - Stores about section content
3. **contacts** - Stores contact form submissions

### Models Location
The Mongoose models are located in `../backend/server/models/`:
- `Project.js` - Project schema
- `About.js` - About section schema  
- `Contact.js` - Contact form schema

### Seeding Data
To populate the database with initial data, run:
```bash
npm run seed
```

This will execute the seed script located at `../backend/server/seed.js`