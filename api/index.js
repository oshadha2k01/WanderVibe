import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from '../backend/routes/contactRoutes.js';
import serverless from 'serverless-http';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api', (req, res) => {
  res.status(200).json({ message: 'API is running' });
});

// Mount contact routes
app.use('/api/contact', contactRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.log('Mongo Error:', error));

// Export the serverless function
export default serverless(app);
