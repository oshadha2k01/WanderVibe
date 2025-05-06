import express from 'express';
import { createContact, getAllContacts } from '../controllers/contactController.js';

const router = express.Router();

// Create new contact submission
router.post('/', createContact);

// Get all contact submissions (admin only)
router.get('/', getAllContacts);

export default router; 