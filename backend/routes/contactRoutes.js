const express = require('express');
const contactController = require('../controllers/contactController');
const authController = require('../controllers/authController');

const router = express.Router();

// Contact form submission route
router.post('/submit', contactController.submitContactForm);

// Office locations routes
router
  .route('/offices')
  .get(contactController.getAllOffices)
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    contactController.createOffice
  );

// Admin routes for managing contact submissions
router.get(
  '/submissions',
  authController.protect,
  authController.restrictTo('admin'),
  contactController.getAllContacts
);

module.exports = router;
