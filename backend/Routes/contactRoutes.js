const express = require('express');
const { body, validationResult } = require('express-validator');
const Contact = require('../Models/Contact.js');
const { sendContactEmail } = require('../Utils/emailService.js');

const router = express.Router();

// Validation rules
const contactValidation = [
  body('name')
    .trim()
    .isLength({ min: 2 })
    .withMessage('Name must be at least 2 characters long'),
  body('email')
    .isEmail()
    .withMessage('Please provide a valid email')
    .normalizeEmail(),
  body('phone')
    .optional()
    .isMobilePhone()
    .withMessage('Please provide a valid phone number'),
  body('message')
    .trim()
    .isLength({ min: 10 })
    .withMessage('Message must be at least 10 characters long')
];

// Submit contact form
router.post('/submit', contactValidation, async (req, res) => {
  try {
    console.log('📥 Received request body:', req.body);
    
    // Check validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('❌ Validation errors:', errors.array());
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { name, email, phone, service, message } = req.body;

    console.log('📥 Processing contact form submission:', { name, email, service });

    // Save to database
    const newContact = new Contact({
      name,
      email,
      phone: phone || '',
      service: service || '',
      message
    });

    console.log('💾 Attempting to save to database...');
    await newContact.save();
    console.log('✅ Contact saved to database with ID:', newContact._id);

    // Send email notification
    console.log('📧 Attempting to send email...');
    await sendContactEmail({
      name,
      email,
      phone,
      service,
      message
    });
    console.log('✅ Email sent successfully');

    res.status(201).json({
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
      data: {
        id: newContact._id,
        name,
        email
      }
    });

  } catch (error) {
    console.error('❌ Contact form submission error:', error);
    console.error('❌ Error stack:', error.stack);
    res.status(500).json({
      success: false,
      message: 'Internal server error. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Get all contact submissions (for admin purposes)
router.get('/submissions', async (req, res) => {
  try {
    const submissions = await Contact.find().sort({ submittedAt: -1 });
    res.status(200).json({
      success: true,
      data: submissions
    });
  } catch (error) {
    console.error('Error fetching submissions:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching submissions'
    });
  }
});

module.exports = router;