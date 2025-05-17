import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './routes/contactRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Get __dirname in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors({
  origin: [
    process.env.FRONTEND_URL || 'https://wandervibe-frontend.vercel.app', 
    'http://localhost:5173'  // For local development
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());

// Define API routes first - these take precedence
app.get('/api', (req, res) => {
  res.send('API is running...');
});

// Mount contact routes
app.use('/api/contact', contactRoutes);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  const frontendBuildPath = path.resolve(__dirname, '../frontend/dist');
  
  app.use(express.static(frontendBuildPath));
  
  // Fallback route - define it explicitly and avoid wildcards with special characters
  // This must be the last route defined
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(frontendBuildPath, 'index.html'));
  });
  
  // Handle each specific route that should return the index.html
  app.get('/about', (req, res) => {
    res.sendFile(path.resolve(frontendBuildPath, 'index.html'));
  });
  
  app.get('/services', (req, res) => {
    res.sendFile(path.resolve(frontendBuildPath, 'index.html'));
  });
  
  app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(frontendBuildPath, 'index.html'));
  });
  
  // Add any other frontend routes you have
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err.message);
  res.status(500).json({ message: 'Server error', error: process.env.NODE_ENV === 'development' ? err.message : undefined });
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV} mode`);
    });
  })
  .catch((error) => console.log('Mongo Error:', error));
