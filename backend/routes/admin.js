const express = require('express');
const Contact = require('../models/Contact');

const router = express.Router();

// Simple admin dashboard (in production, add proper authentication)
router.get('/dashboard', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Contact Form Submissions</title>
        <style>
            body { font-family: Arial, sans-serif; margin: 20px; background-color: #f5f5f5; }
            .container { max-width: 1200px; margin: 0 auto; background: white; padding: 20px; border-radius: 8px; }
            h1 { color: #333; text-align: center; }
            .stats { display: flex; gap: 20px; margin-bottom: 30px; }
            .stat-card { background: #007bff; color: white; padding: 20px; border-radius: 8px; flex: 1; text-align: center; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
            th { background-color: #f8f9fa; font-weight: bold; }
            tr:hover { background-color: #f5f5f5; }
            .status { padding: 4px 8px; border-radius: 4px; font-size: 12px; }
            .status.new { background: #ffc107; color: #000; }
            .status.read { background: #17a2b8; color: white; }
            .status.replied { background: #28a745; color: white; }
            .message { max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
            .date { font-size: 12px; color: #666; }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Contact Form Submissions</h1>
            
            <div class="stats">
                <div class="stat-card">
                    <h3>${contacts.length}</h3>
                    <p>Total Submissions</p>
                </div>
                <div class="stat-card">
                    <h3>${contacts.filter(c => c.status === 'new').length}</h3>
                    <p>New Messages</p>
                </div>
                <div class="stat-card">
                    <h3>${contacts.filter(c => c.status === 'replied').length}</h3>
                    <p>Replied</p>
                </div>
            </div>
            
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Subject</th>
                        <th>Message</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    ${contacts.map(contact => `
                        <tr>
                            <td class="date">${new Date(contact.createdAt).toLocaleDateString()}</td>
                            <td>${contact.firstName} ${contact.lastName}</td>
                            <td><a href="mailto:${contact.email}">${contact.email}</a></td>
                            <td><a href="tel:${contact.number}">${contact.number}</a></td>
                            <td>${contact.subject}</td>
                            <td class="message" title="${contact.message}">${contact.message}</td>
                            <td><span class="status ${contact.status}">${contact.status.toUpperCase()}</span></td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    </body>
    </html>
    `;
    
    res.send(html);
  } catch (error) {
    console.error('Admin dashboard error:', error);
    res.status(500).send('Error loading dashboard');
  }
});

module.exports = router;