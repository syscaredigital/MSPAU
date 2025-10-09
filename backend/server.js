const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/mspwebsite', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB Connected to MSP Website Database 🚀');
})
.catch((err) => console.error('MongoDB Error:', err));

// Test route - simple GET
app.get('/', (req, res) => {
  res.json({ 
    message: 'MSP Backend is Running 🎉',
    version: '1.0.0'
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected',
    timestamp: new Date().toISOString()
  });
});

// Test contact route without the router first
app.post('/api/contact/test', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Contact test route is working' 
  });
});

// Import and use routes only if the test routes work
try {
  const contactRoutes = require('./Routes/contactRoutes');
  app.use('/api/contact', contactRoutes);
  console.log('✅ Contact routes loaded successfully');
} catch (error) {
  console.error('❌ Error loading contact routes:', error);
}

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('🚨 Unhandled error:', error);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!'
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📧 Email notifications will be sent to: ${process.env.EMAIL_TO}`);
  console.log(`🗄️ Database: ${process.env.MONGO_URI}`);
  console.log(`🌐 Frontend URL: ${process.env.FRONTEND_URL}`);
});