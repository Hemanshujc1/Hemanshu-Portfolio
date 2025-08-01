const express = require('express');
const { body, validationResult } = require('express-validator');
const Contact = require('../models/Contact');
const { sendNotificationEmail } = require('../utils/emailService');

const router = express.Router();

// Middleware to log all requests to contact endpoint
router.use((req, res, next) => {
  console.log(`Contact API ${req.method} ${req.path}:`, {
    body: req.body,
    query: req.query,
    headers: {
      'content-type': req.headers['content-type'],
      'origin': req.headers.origin,
      'user-agent': req.headers['user-agent']
    }
  });
  next();
});



// Test endpoint
router.get('/test', (req, res) => {
  res.json({
    success: true,
    message: 'Contact API is working',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    origin: req.headers.origin,
    corsHeaders: {
      'access-control-allow-origin': res.get('Access-Control-Allow-Origin'),
      'access-control-allow-methods': res.get('Access-Control-Allow-Methods'),
      'access-control-allow-headers': res.get('Access-Control-Allow-Headers')
    }
  });
});

// CORS test endpoint
router.options('/test', (req, res) => {
  console.log('OPTIONS /test called with origin:', req.headers.origin);
  res.sendStatus(200);
});

// Validation rules
const contactValidation = [
  body('FirstName')
    .trim()
    .isLength({ min: 2, max: 20 })
    .withMessage('First name must be between 2 and 20 characters')
    .matches(/^[a-zA-Z\s\u00C0-\u017F]+$/)
    .withMessage('First name can only contain letters and spaces'),
  
  body('LastName')
    .trim()
    .isLength({ min: 2, max: 20 })
    .withMessage('Last name must be between 2 and 20 characters')
    .matches(/^[a-zA-Z\s\u00C0-\u017F]+$/)
    .withMessage('Last name can only contain letters and spaces'),
  
  body('Email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  
  body('Number')
    .trim()
    .isLength({ min: 10, max: 15 })
    .withMessage('Mobile number must be between 10 and 15 characters')
    .matches(/^[+]?[\d\s\-()]+$/)
    .withMessage('Please provide a valid mobile number'),
  
  body('Subject')
    .trim()
    .isLength({ min: 5, max: 100 })
    .withMessage('Subject must be between 5 and 100 characters'),
  
  body('Message')
    .trim()
    .isLength({ min: 10, max: 2000 })
    .withMessage('Message must be between 10 and 2000 characters')
];

// POST /api/contact - Submit contact form
router.post('/', contactValidation, async (req, res) => {
  try {
    console.log('Contact form submission received:', {
      body: req.body,
      headers: req.headers['content-type']
    });

    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('Validation errors:', errors.array());
      const errorMessages = errors.array().map(error => `${error.param}: ${error.msg}`);
      return res.status(400).json({
        success: false,
        message: 'Please check your input and try again',
        errors: errors.array(),
        details: errorMessages
      });
    }

    const { FirstName, LastName, Email, Number, Subject, Message } = req.body;

    // Create new contact entry
    const contact = new Contact({
      firstName: FirstName,
      lastName: LastName,
      email: Email,
      number: Number,
      subject: Subject,
      message: Message
    });

    // Save to database
    await contact.save();

    // Send notification email (optional) - don't let email errors affect the response
    setTimeout(async () => {
      try {
        await sendNotificationEmail({
          firstName: FirstName,
          lastName: LastName,
          email: Email,
          number: Number,
          subject: Subject,
          message: Message
        });
        console.log('Notification email sent successfully');
      } catch (emailError) {
        console.error('Email notification failed:', emailError);
        // Email failure doesn't affect the contact form submission
      }
    }, 100); // Send email asynchronously

    res.status(201).json({
      success: true,
      message: 'Thank you for your message! I\'ll get back to you soon.',
      data: {
        id: contact._id,
        createdAt: contact.createdAt
      }
    });

  } catch (error) {
    console.error('Contact form submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit your message. Please try again later.'
    });
  }
});

// GET /api/contact - Get all contacts (for admin use)
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 10, status } = req.query;
    
    const query = status ? { status } : {};
    const options = {
      page: parseInt(page),
      limit: parseInt(limit),
      sort: { createdAt: -1 }
    };

    const contacts = await Contact.find(query)
      .sort(options.sort)
      .limit(options.limit * 1)
      .skip((options.page - 1) * options.limit);

    const total = await Contact.countDocuments(query);

    res.json({
      success: true,
      data: contacts,
      pagination: {
        current: options.page,
        pages: Math.ceil(total / options.limit),
        total
      }
    });

  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve contacts'
    });
  }
});

// PUT /api/contact/:id/status - Update contact status
router.put('/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['new', 'read', 'replied'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status. Must be: new, read, or replied'
      });
    }

    const contact = await Contact.findByIdAndUpdate(
      id,
      { status, updatedAt: Date.now() },
      { new: true }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }

    res.json({
      success: true,
      message: 'Contact status updated successfully',
      data: contact
    });

  } catch (error) {
    console.error('Update contact status error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update contact status'
    });
  }
});

module.exports = router;