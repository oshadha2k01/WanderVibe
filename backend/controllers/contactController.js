import Contact from '../models/Contact.js';

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
export const submitContactForm = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validate input
    if (!name || !email || !phone || !subject || !message) {
      return res.status(400).json({ message: 'Please fill all required fields' });
    }

    // Create new contact form submission
    const contact = await Contact.create({
      name,
      email,
      phone,
      subject,
      message
    });

    if (contact) {
      res.status(201).json({
        success: true,
        message: 'Your message has been sent successfully!',
        data: contact
      });
    } else {
      res.status(400).json({ message: 'Invalid contact data' });
    }
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({
      message: 'Server error while processing your request',
      error: error.message
    });
  }
};

// @desc    Get all contact form submissions
// @route   GET /api/contact
// @access  Private (would normally require authentication)
export const getContactSubmissions = async (req, res) => {
  try {
    const contacts = await Contact.find({}).sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    res.status(500).json({
      message: 'Server error while fetching contact submissions',
      error: error.message
    });
  }
};
