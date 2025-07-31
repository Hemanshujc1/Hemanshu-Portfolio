const express = require('express');
const Contact = require('../models/Contact');

const router = express.Router();

// Enhanced admin dashboard
router.get('/dashboard', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Contact Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            * { box-sizing: border-box; }
            body { 
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
                margin: 0; 
                padding: 20px; 
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                min-height: 100vh;
            }
            .container { 
                max-width: 1400px; 
                margin: 0 auto; 
                background: white; 
                border-radius: 12px; 
                box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                overflow: hidden;
            }
            .header {
                background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
                color: white;
                padding: 30px;
                text-align: center;
            }
            .header h1 { margin: 0; font-size: 2.5rem; font-weight: 300; }
            .header p { margin: 10px 0 0 0; opacity: 0.8; }
            
            .stats { 
                display: grid; 
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
                gap: 20px; 
                padding: 30px; 
                background: #f8f9fa;
            }
            .stat-card { 
                background: white;
                padding: 25px; 
                border-radius: 10px; 
                text-align: center;
                box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                transition: transform 0.2s;
            }
            .stat-card:hover { transform: translateY(-2px); }
            .stat-card h3 { margin: 0; font-size: 2.5rem; color: #2c3e50; }
            .stat-card p { margin: 10px 0 0 0; color: #666; font-weight: 500; }
            .stat-card.new { border-left: 4px solid #ffc107; }
            .stat-card.read { border-left: 4px solid #17a2b8; }
            .stat-card.replied { border-left: 4px solid #28a745; }
            .stat-card.total { border-left: 4px solid #6f42c1; }
            
            .table-container { 
                padding: 0 30px 30px 30px; 
                overflow-x: auto;
            }
            
            .notification {
                padding: 15px;
                margin: 20px 0;
                border-radius: 4px;
                display: none;
            }
            .notification.success {
                background: #d4edda;
                color: #155724;
                border: 1px solid #c3e6cb;
            }
            .notification.error {
                background: #f8d7da;
                color: #721c24;
                border: 1px solid #f5c6cb;
            }
            
            table { 
                width: 100%; 
                border-collapse: collapse; 
                background: white;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            }
            th { 
                background: #2c3e50; 
                color: white; 
                padding: 15px 12px; 
                font-weight: 600;
                text-transform: uppercase;
                font-size: 0.85rem;
                letter-spacing: 0.5px;
            }
            td { 
                padding: 15px 12px; 
                border-bottom: 1px solid #eee; 
                vertical-align: top;
            }
            tr:hover { background-color: #f8f9fa; }
            tr:last-child td { border-bottom: none; }
            
            .status-select { 
                padding: 8px 12px; 
                border: 1px solid #ddd; 
                border-radius: 4px;
                background: white;
                cursor: pointer;
                font-size: 0.9rem;
                min-width: 100px;
            }
            
            .message-btn { 
                background: #007bff;
                color: white;
                border: none;
                padding: 8px 16px;
                border-radius: 4px;
                cursor: pointer;
                font-size: 0.9rem;
            }
            .message-btn:hover { 
                background: #0056b3;
            }
            
            .date { font-size: 0.9rem; color: #666; }
            .contact-info { font-weight: 500; }
            .email-link, .phone-link { 
                color: #007bff; 
                text-decoration: none; 
                font-weight: 500;
            }
            .email-link:hover, .phone-link:hover { text-decoration: underline; }
            
            .modal {
                display: none;
                position: fixed;
                z-index: 1000;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0,0,0,0.5);
            }
            .modal-content {
                background-color: white;
                margin: 5% auto;
                padding: 0;
                border-radius: 12px;
                width: 90%;
                max-width: 600px;
                max-height: 80vh;
                overflow-y: auto;
                box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            }
            .modal-header {
                background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
                color: white;
                padding: 20px 30px;
                border-radius: 12px 12px 0 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .modal-body { padding: 30px; }
            .close {
                color: white;
                font-size: 28px;
                font-weight: bold;
                cursor: pointer;
                opacity: 0.8;
            }
            .close:hover { opacity: 1; }
            
            .detail-row {
                margin-bottom: 20px;
                padding-bottom: 15px;
                border-bottom: 1px solid #eee;
            }
            .detail-row:last-child { border-bottom: none; margin-bottom: 0; }
            .detail-label {
                font-weight: 600;
                color: #2c3e50;
                margin-bottom: 5px;
                text-transform: uppercase;
                font-size: 0.85rem;
                letter-spacing: 0.5px;
            }
            .detail-value {
                color: #555;
                line-height: 1.6;
            }
            .message-full {
                background: #f8f9fa;
                padding: 20px;
                border-radius: 8px;
                border-left: 4px solid #007bff;
                white-space: pre-wrap;
                word-wrap: break-word;
                font-family: inherit;
                line-height: 1.6;
            }
            
            @media (max-width: 768px) {
                body { padding: 10px; }
                .header h1 { font-size: 2rem; }
                .stats { grid-template-columns: 1fr; padding: 20px; }
                .table-container { padding: 0 20px 20px 20px; }
                th, td { padding: 10px 8px; font-size: 0.9rem; }
                .modal-content { margin: 10% auto; width: 95%; }
                .modal-body { padding: 20px; }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>📧 Contact Dashboard</h1>
                <p>Manage your portfolio contact form submissions</p>
            </div>
            
            <div class="stats">
                <div class="stat-card total">
                    <h3>${contacts.length}</h3>
                    <p>Total Submissions</p>
                </div>
                <div class="stat-card new">
                    <h3>${contacts.filter(c => c.status === 'new').length}</h3>
                    <p>New Messages</p>
                </div>
                <div class="stat-card read">
                    <h3>${contacts.filter(c => c.status === 'read').length}</h3>
                    <p>Read Messages</p>
                </div>
                <div class="stat-card replied">
                    <h3>${contacts.filter(c => c.status === 'replied').length}</h3>
                    <p>Replied</p>
                </div>
            </div>
            
            <div class="table-container">
                <div id="notification" class="notification"></div>
                
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Contact</th>
                            <th>Subject</th>
                            <th>Message</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${contacts.map((contact, index) => `
                            <tr data-id="${contact._id}">
                                <td class="date">${new Date(contact.createdAt).toLocaleDateString('en-US', { 
                                    year: 'numeric', 
                                    month: 'short', 
                                    day: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })}</td>
                                <td class="contact-info">${contact.firstName} ${contact.lastName}</td>
                                <td>
                                    <a href="mailto:${contact.email}" class="email-link">${contact.email}</a><br>
                                    <a href="tel:${contact.number}" class="phone-link">${contact.number}</a>
                                </td>
                                <td><strong>${contact.subject}</strong></td>
                                <td>
                                    <button class="message-btn" onclick="viewMessage(${index})">
                                        View Message
                                    </button>
                                </td>
                                <td>
                                    <select class="status-select" onchange="changeStatus('${contact._id}', this.value)">
                                        <option value="new" ${contact.status === 'new' ? 'selected' : ''}>New</option>
                                        <option value="read" ${contact.status === 'read' ? 'selected' : ''}>Read</option>
                                        <option value="replied" ${contact.status === 'replied' ? 'selected' : ''}>Replied</option>
                                    </select>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Message Modal -->
        <div id="messageModal" class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h2>📩 Message Details</h2>
                    <span class="close" onclick="closeModal()">&times;</span>
                </div>
                <div class="modal-body" id="modalBody">
                    <!-- Content will be populated by JavaScript -->
                </div>
            </div>
        </div>

        <script>
            // Store contacts data
            window.contactsData = ${JSON.stringify(contacts)};
        </script>
        <script src="/static/admin-dashboard.js"></script>
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