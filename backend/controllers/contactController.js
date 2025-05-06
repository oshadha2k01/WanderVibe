const Contact = require('../models/Contact');
const Office = require('../models/Office');

// Submit contact form
exports.submitContactForm = async (req, res) => {
  try {
    const newContact = await Contact.create({
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message
    });
    
    res.status(201).json({
      status: 'success',
      message: 'Your message has been sent successfully!',
      data: {
        contact: newContact
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Get all contact submissions (admin only)
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort('-createdAt');
    
    res.status(200).json({
      status: 'success',
      results: contacts.length,
      data: {
        contacts
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Get all office locations
exports.getAllOffices = async (req, res) => {
  try {
    const offices = await Office.find();
    
    res.status(200).json({
      status: 'success',
      results: offices.length,
      data: {
        offices
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Create a new office location (admin only)
exports.createOffice = async (req, res) => {
  try {
    const newOffice = await Office.create(req.body);
    
    res.status(201).json({
      status: 'success',
      data: {
        office: newOffice
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};
