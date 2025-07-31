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
        <title>Contact Form Submissions - Admin Dashboard</title>
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
            .filters {
                margin-bottom: 20px;
                display: flex;
                gap: 10px;
                align-items: center;
                flex-wrap: wrap;
            }
            .filter-btn {
                padding: 8px 16px;
                border: 1px solid #ddd;
                background: white;
                border-radius: 20px;
                cursor: pointer;
                transition: all 0.2s;
            }
            .filter-btn:hover, .filter-btn.active {
                background: #007bff;
                color: white;
                border-color: #007bff;
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
                padding: 6px 10px; 
                border: 1px solid #ddd; 
                border-radius: 4px;
                background: white;
                cursor: pointer;
                font-size: 0.9rem;
            }
            
            .message-preview { 
                max-width: 250px; 
                overflow: hidden; 
                text-overflow: ellipsis; 
                white-space: nowrap;
                cursor: pointer;
                color: #007bff;
                padding: 5px;
                border: 1px solid #e0e0e0;
                border-radius: 4px;
                background: #f8f9fa;
            }
            .message-preview:hover { 
                text-decoration: underline; 
                background: #e3f2fd;
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
                backdrop-filter: blur(5px);
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
            
            .success-message {
                background: #d4edda;
                color: #155724;
                padding: 10px 15px;
                border-radius: 4px;
                margin: 10px 0;
                border: 1px solid #c3e6cb;
            }
            
            .error-message {
                background: #f8d7da;
                color: #721c24;
                padding: 10px 15px;
                border-radius: 4px;
                margin: 10px 0;
                border: 1px solid #f5c6cb;
            }
            
            @media (max-width: 768px) {
                body { padding: 10px; }
                .header h1 { font-size: 2rem; }
                .stats { grid-template-columns: 1fr; padding: 20px; }
                .table-container { padding: 0 20px 20px 20px; }
                th, td { padding: 10px 8px; font-size: 0.9rem; }
                .modal-content { margin: 10% auto; width: 95%; }
                .modal-body { padding: 20px; }
                .message-preview { max-width: 150px; }
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
                <div class="filters">
                    <button class="filter-btn active" onclick="filterContacts('all', this)">All</button>
                    <button class="filter-btn" onclick="filterContacts('new', this)">New</button>
                    <button class="filter-btn" onclick="filterContacts('read', this)">Read</button>
                    <button class="filter-btn" onclick="filterContacts('replied', this)">Replied</button>
                </div>
                
                <div id="message-area"></div>
                
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
                        ${contacts.map(contact => `
                            <tr class="contact-row" data-status="${contact.status}" data-id="${contact._id}">
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
                                    <div class="message-preview" onclick="showMessage('${contact._id}')">
                                        ${contact.message.substring(0, 50)}${contact.message.length > 50 ? '...' : ''}
                                    </div>
                                </td>
                                <td>
                                    <select class="status-select" onchange="updateStatus('${contact._id}', this.value)" data-original="${contact.status}">
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
            const contacts = ${JSON.stringify(contacts)};
            
            function showMessage(contactId) {
                console.log('Showing message for:', contactId);
                const contact = contacts.find(c => c._id === contactId);
                if (!contact) {
                    console.error('Contact not found:', contactId);
                    return;
                }
                
                const modalBody = document.getElementById('modalBody');
                modalBody.innerHTML = 
                    '<div class="detail-row">' +
                        '<div class="detail-label">From</div>' +
                        '<div class="detail-value">' + contact.firstName + ' ' + contact.lastName + '</div>' +
                    '</div>' +
                    '<div class="detail-row">' +
                        '<div class="detail-label">Email</div>' +
                        '<div class="detail-value"><a href="mailto:' + contact.email + '" class="email-link">' + contact.email + '</a></div>' +
                    '</div>' +
                    '<div class="detail-row">' +
                        '<div class="detail-label">Phone</div>' +
                        '<div class="detail-value"><a href="tel:' + contact.number + '" class="phone-link">' + contact.number + '</a></div>' +
                    '</div>' +
                    '<div class="detail-row">' +
                        '<div class="detail-label">Subject</div>' +
                        '<div class="detail-value"><strong>' + contact.subject + '</strong></div>' +
                    '</div>' +
                    '<div class="detail-row">' +
                        '<div class="detail-label">Date</div>' +
                        '<div class="detail-value">' + new Date(contact.createdAt).toLocaleString() + '</div>' +
                    '</div>' +
                    '<div class="detail-row">' +
                        '<div class="detail-label">Message</div>' +
                        '<div class="detail-value">' +
                            '<div class="message-full">' + contact.message + '</div>' +
                        '</div>' +
                    '</div>';
                
                document.getElementById('messageModal').style.display = 'block';
                
                // Mark as read if it's new
                if (contact.status === 'new') {
                    updateStatus(contactId, 'read');
                }
            }
            
            function closeModal() {
                document.getElementById('messageModal').style.display = 'none';
            }
            
            function showMessage(messageArea, type, text) {
                const messageDiv = document.createElement('div');
                messageDiv.className = type + '-message';
                messageDiv.textContent = text;
                messageArea.appendChild(messageDiv);
                
                setTimeout(() => {
                    messageDiv.remove();
                }, 3000);
            }
            
            function updateStatus(contactId, newStatus) {
                console.log('Updating status for:', contactId, 'to:', newStatus);
                const messageArea = document.getElementById('message-area');
                
                fetch('/api/contact/' + contactId + '/status', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ status: newStatus })
                })
                .then(response => {
                    console.log('Response status:', response.status);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Response data:', data);
                    if (data.success) {
                        // Update the contact in our local array
                        const contact = contacts.find(c => c._id === contactId);
                        if (contact) {
                            contact.status = newStatus;
                        }
                        
                        // Show success message
                        showMessage(messageArea, 'success', 'Status updated successfully!');
                        
                        // Update the row's data attribute
                        const row = document.querySelector('[data-id="' + contactId + '"]');
                        if (row) {
                            row.setAttribute('data-status', newStatus);
                        }
                        
                        // Refresh stats after a short delay
                        setTimeout(() => location.reload(), 1500);
                    } else {
                        throw new Error(data.message || 'Failed to update status');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    showMessage(messageArea, 'error', 'Error updating status: ' + error.message);
                    
                    // Reset the select to original value
                    const select = document.querySelector('[data-id="' + contactId + '"] select');
                    if (select) {
                        select.value = select.getAttribute('data-original');
                    }
                });
            }
            
            function filterContacts(status, button) {
                const rows = document.querySelectorAll('.contact-row');
                const buttons = document.querySelectorAll('.filter-btn');
                
                // Update active button
                buttons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Filter rows
                rows.forEach(row => {
                    if (status === 'all' || row.getAttribute('data-status') === status) {
                        row.style.display = '';
                    } else {
                        row.style.display = 'none';
                    }
                });
            }
            
            // Close modal when clicking outside
            window.onclick = function(event) {
                const modal = document.getElementById('messageModal');
                if (event.target === modal) {
                    closeModal();
                }
            }
            
            // Close modal with Escape key
            document.addEventListener('keydown', function(event) {
                if (event.key === 'Escape') {
                    closeModal();
                }
            });
        </script>
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