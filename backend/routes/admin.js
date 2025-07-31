const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

// Enhanced admin dashboard
router.get('/dashboard', async (req, res) => {
    try {
      const contacts = await Contact.find().sort({ createdAt: -1 });
      res.render('dashboard', { contacts });
    } catch (err) {
      res.status(500).send('Error loading dashboard');
    }
  });
  

module.exports = router;
