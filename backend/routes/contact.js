const express = require('express');
const { body, validationResult } = require('express-validator');
const Contact = require('../models/Contact');
const { sendNotificationEmail } = require('../utils/emailService');

const router = express.Router();

// Validation rules
const contactValidation = [
  body('FirstName')
    .trim()
    .isLength({ min: 2, max: 20 })
    .withMessage('First name must be between 2 and 20 characters')
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage('First name can only contain letters and spaces'),
  
  body('LastName')
    .trim()
    .isLength({ min: 2, max: 20 })
    .withMessage('Last name must be between 2 and 20 characters')
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage('Last name can only contain letters and spaces'),
  
  body('Email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  
  body('Number')
    .trim()
    .isLength({ min: 10, max: 14 })
    .withMessage('Mobile number must be between 10 and 14 digits')
    .matches(/^[+]?[\d\s-()]+$/)
    .withMessage('Please provide a valid mobile number'),
  
  body('Subject')
    .trim()
    .isLength({ min: 5, max: 50 })
    .withMessage('Subject must be between 5 and 50 characters'),
  
  body('Message')
    .trim()
    .isLength({ min: 20, max: 1000 })
    .withMessage('Message must be between 20 and 1000 characters')
];

// POST /api/contact - Submit contact form
router.post('/', contactValidation, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
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

    // Send notification email (optional)
    try {
      await sendNotificationEmail({
        firstName: FirstName,
        lastName: LastName,
        email: Email,
        number: Number,
        subject: Subject,
        message: Message
      });
    } catch (emailError) {
      console.error('Email notification failed:', emailError);
      // Don't fail the request if email fails
    }

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