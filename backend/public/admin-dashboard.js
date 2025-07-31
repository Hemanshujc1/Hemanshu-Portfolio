// Admin Dashboard JavaScript

function viewMessage(index) {
    const contact = window.contactsData[index];
    if (!contact) return;
    
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
        changeStatus(contact._id, 'read');
    }
}

function closeModal() {
    document.getElementById('messageModal').style.display = 'none';
}

function showNotification(message, type) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = 'notification ' + type;
    notification.style.display = 'block';
    
    setTimeout(function() {
        notification.style.display = 'none';
    }, 3000);
}

function changeStatus(contactId, newStatus) {
    console.log('Changing status for:', contactId, 'to:', newStatus);
    
    fetch('/api/contact/' + contactId + '/status', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus })
    })
    .then(function(response) {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(function(data) {
        if (data.success) {
            showNotification('Status updated successfully!', 'success');
            
            // Update local data
            const contact = window.contactsData.find(function(c) { return c._id === contactId; });
            if (contact) {
                contact.status = newStatus;
            }
            
            // Refresh page after delay to update stats
            setTimeout(function() {
                window.location.reload();
            }, 1500);
        } else {
            throw new Error(data.message || 'Failed to update status');
        }
    })
    .catch(function(error) {
        console.error('Error:', error);
        showNotification('Error updating status: ' + error.message, 'error');
    });
}

// Initialize event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners for message buttons
    const messageButtons = document.querySelectorAll('.message-btn');
    messageButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            viewMessage(index);
        });
    });
    
    // Add event listeners for status selects
    const statusSelects = document.querySelectorAll('.status-select');
    statusSelects.forEach(function(select) {
        select.addEventListener('change', function() {
            const contactId = this.getAttribute('data-contact-id');
            const newStatus = this.value;
            changeStatus(contactId, newStatus);
        });
    });
    
    // Add event listener for close modal button
    const closeBtn = document.getElementById('closeModalBtn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('messageModal');
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});