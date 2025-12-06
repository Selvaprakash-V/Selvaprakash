# Quick Start Guide

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm run install-all
```

### 2. Configure Environment
```bash
# Copy the example environment file
cp config/.env.example config/.env

# Edit config/.env with your settings
```

Required environment variables:
- `PORT` - Backend server port (default: 5000)
- `MONGODB_URI` - MongoDB connection string
- `NODE_ENV` - Environment (development/production)
- `EMAIL_USER` - Gmail address for sending emails
- `EMAIL_APP_PASSWORD` - Gmail app password
- `RECIPIENT_EMAIL` - Email to receive contact form submissions

### 3. Start MongoDB
Make sure MongoDB is running on your system:
```bash
# Windows
net start MongoDB

# macOS/Linux
sudo systemctl start mongod
```

### 4. Seed Database (Optional)
```bash
npm run seed
```

### 5. Run Development Server
```bash
npm run dev
```

This will start:
- Backend API on http://localhost:5000
- Frontend on http://localhost:3000

## 📁 Project Structure

```
├── frontend/       # React app
├── backend/        # Express API
├── assets/         # Images & static files
├── config/         # Environment & config
├── docs/           # Documentation
└── scripts/        # Utility scripts
```

## 🛠️ Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Run both frontend & backend |
| `npm run server` | Run backend only |
| `npm run client` | Run frontend only |
| `npm start` | Run production server |
| `npm run seed` | Seed database |
| `npm run check-projects` | Verify database |
| `npm run install-all` | Install all dependencies |

## 📝 Key Files

- `config/.env` - Environment variables
- `backend/server.js` - Backend entry point
- `frontend/src/App.js` - Frontend entry point
- `scripts/seed.js` - Database seeding
- `README.md` - Full documentation

## 🔧 Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running
- Check `MONGODB_URI` in `config/.env`

### Port Already in Use
- Change `PORT` in `config/.env`
- Or kill the process using the port

### Email Not Sending
- Check Gmail app password setup
- See `docs/EMAIL_SETUP.md` for details

## 📚 Documentation

- `docs/FRONTEND.md` - Frontend documentation
- `docs/BACKEND.md` - Backend API documentation
- `docs/DATABASE.md` - Database setup
- `docs/EMAIL_SETUP.md` - Email configuration
- `docs/MAPS_SETUP.md` - Maps integration

## ✅ Verification

After starting the servers, verify:
1. Backend: http://localhost:5000 (should show "Welcome to Portfolio API")
2. Frontend: http://localhost:3000 (should show portfolio)
3. API: http://localhost:5000/api/projects (should return projects)

## 🎯 Next Steps

1. Customize content in the database
2. Update profile image in `assets/images/profile/`
3. Add your projects via the API or seed script
4. Configure email settings for contact form
5. Deploy to production

For detailed information, see the main [README.md](README.md)
