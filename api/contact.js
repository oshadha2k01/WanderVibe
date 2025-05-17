import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { submitContactForm, getContactSubmissions } from '../backend/controllers/contactController.js';
import serverless from 'serverless-http';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Contact routes
app.post('/api/contact', submitContactForm);
app.get('/api/contact', getContactSubmissions);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.log('Mongo Error:', error));

// Export the serverless function
export default serverless(app);
