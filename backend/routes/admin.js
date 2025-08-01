const express = require("express");
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
const Contact = require("../models/Contact");
const Admin = require("../models/Admin");
const { generateToken, requireAuth, redirectIfAuth } = require("../utils/auth");

const router = express.Router();

// Root admin route - redirect based on auth status
router.get('/', (req, res) => {
  const token = req.session?.token;
  
  if (token) {
    try {
      const jwt = require('jsonwebtoken');
      jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
      return res.redirect('/admin/dashboard');
    } catch (error) {
      req.session.destroy();
    }
  }
  
  res.redirect('/admin/login');
});

// Login page
router.get('/login', redirectIfAuth, (req, res) => {
  let error = null;
  
  // Handle different error types from query parameters
  if (req.query.error) {
    switch (req.query.error) {
      case 'unauthorized':
        error = 'Please log in to access the admin dashboard';
        break;
      case 'expired':
        error = 'Your session has expired. Please log in again';
        break;
      case 'invalid':
        error = 'Invalid session. Please log in again';
        break;
      default:
        error = 'Authentication required';
    }
  }
  
  res.render('login', { error });
});

// Rate limiting for login attempts
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 login requests per windowMs
  message: 'Too many login attempts, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

// Login POST
router.post('/login', loginLimiter, [
  body('username').trim().notEmpty().withMessage('Username is required'),
  body('password').notEmpty().withMessage('Password is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render('login', { 
        error: errors.array()[0].msg 
      });
    }

    const { username, password } = req.body;

    // Find admin by username or email
    const admin = await Admin.findOne({
      $or: [
        { username: username },
        { email: username }
      ],
      isActive: true
    });

    if (!admin || !(await admin.comparePassword(password))) {
      return res.render('login', { 
        error: 'Invalid credentials' 
      });
    }

    // Update last login
    await admin.updateLastLogin();

    // Generate token and store in session
    const token = generateToken(admin._id);
    req.session.token = token;

    res.redirect('/admin/dashboard');
  } catch (error) {
    console.error('Login error:', error);
    res.render('login', { 
      error: 'An error occurred during login' 
    });
  }
});

// Logout
router.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Logout error:', err);
    }
    res.redirect('/admin/login');
  });
});

// Enhanced admin dashboard (protected)
router.get('/dashboard', requireAuth, async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.render('dashboard', { 
      contacts,
      admin: req.admin
    });
  } catch (err) {
    console.error('Dashboard error:', err);
    res.status(500).send('Error loading dashboard');
  }
});

// Update contact status (protected)
router.patch('/contact/:id/status', requireAuth, async (req, res) => {
  try {
    const { status } = req.body;
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status, updatedAt: new Date() },
      { new: true }
    );
    
    if (!contact) {
      return res.status(404).json({ success: false, message: 'Contact not found' });
    }
    
    res.json({ success: true, contact });
  } catch (error) {
    console.error('Update status error:', error);
    res.status(500).json({ success: false, message: 'Error updating status' });
  }
});

// Change password (protected)
router.post('/change-password', requireAuth, [
  body('currentPassword').notEmpty().withMessage('Current password is required'),
  body('newPassword').isLength({ min: 6 }).withMessage('New password must be at least 6 characters')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        message: errors.array()[0].msg 
      });
    }

    const { currentPassword, newPassword } = req.body;
    const admin = await Admin.findById(req.admin._id);

    // Verify current password
    if (!(await admin.comparePassword(currentPassword))) {
      return res.status(400).json({ 
        success: false, 
        message: 'Current password is incorrect' 
      });
    }

    // Update password
    admin.password = newPassword;
    await admin.save();

    res.json({ 
      success: true, 
      message: 'Password updated successfully' 
    });
  } catch (error) {
    console.error('Change password error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error updating password' 
    });
  }
});
  

module.exports = router;
