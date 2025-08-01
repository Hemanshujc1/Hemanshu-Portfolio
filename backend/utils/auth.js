const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

// Generate JWT token
const generateToken = (adminId) => {
  return jwt.sign(
    { adminId },
    process.env.JWT_SECRET || 'your-secret-key',
    { expiresIn: '24h' }
  );
};

// Middleware to protect admin routes
const requireAuth = async (req, res, next) => {
  try {
    // Clear any cache headers to prevent caching of protected pages
    res.set({
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    });

    // Check for token in session or Authorization header
    let token = req.session?.token || req.headers.authorization?.replace('Bearer ', '');
    
    if (!token) {
      // Clear session if it exists but has no token
      if (req.session) {
        req.session.destroy();
      }
      return res.redirect('/admin/login?error=unauthorized');
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    
    // Check token expiration explicitly
    if (decoded.exp && Date.now() >= decoded.exp * 1000) {
      req.session.destroy();
      return res.redirect('/admin/login?error=expired');
    }
    
    // Find admin
    const admin = await Admin.findById(decoded.adminId).select('-password');
    
    if (!admin || !admin.isActive) {
      req.session.destroy();
      return res.redirect('/admin/login?error=invalid');
    }

    // Add admin to request object
    req.admin = admin;
    next();
  } catch (error) {
    console.error('Auth middleware error:', error);
    // Always destroy session on any auth error
    if (req.session) {
      req.session.destroy();
    }
    return res.redirect('/admin/login?error=unauthorized');
  }
};

// Middleware to redirect if already authenticated
const redirectIfAuth = (req, res, next) => {
  const token = req.session?.token;
  
  if (token) {
    try {
      jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
      return res.redirect('/admin/dashboard');
    } catch (error) {
      // Token is invalid, continue to login
      req.session.destroy();
    }
  }
  
  next();
};

module.exports = {
  generateToken,
  requireAuth,
  redirectIfAuth
};