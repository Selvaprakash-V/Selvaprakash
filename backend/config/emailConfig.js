const nodemailer = require('nodemailer');

// Create a transporter using Gmail with alternative configuration
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // Use TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Verify connection configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log('❌ Email configuration error:', error.message);
    console.log('💡 Please set up EMAIL_APP_PASSWORD in .env file');
  } else {
    console.log('✅ Email server is ready to send messages');
  }
});

module.exports = transporter;
