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
    
    const modal = document.getElementById('messageModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    
    // Mark as read if it's new
    if (contact.status === 'new') {
        changeStatus(contact._id, 'read');
    }
}

function closeModal() {
    const modal = document.getElementById('messageModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

function showNotification(message, type) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = 'p-4 rounded-lg border text-sm mb-6 ';
    
    if (type === 'success') {
        notification.className += 'bg-green-50 text-green-800 border-green-200';
    } else {
        notification.className += 'bg-red-50 text-red-800 border-red-200';
    }
    
    notification.classList.remove('hidden');
    
    setTimeout(function() {
        notification.classList.add('hidden');
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

// Filter functionality
function filterContacts(status) {
    const rows = document.querySelectorAll('.contact-row');
    const buttons = document.querySelectorAll('.filter-btn');
    
    // Update active button
    buttons.forEach(btn => {
        btn.classList.remove('bg-blue-600', 'bg-yellow-500', 'bg-cyan-500', 'bg-green-500');
        btn.classList.add('bg-gray-300', 'text-gray-700');
    });
    
    const activeBtn = document.querySelector(`[data-status="${status}"]`);
    if (activeBtn) {
        activeBtn.classList.remove('bg-gray-300', 'text-gray-700');
        if (status === 'all') activeBtn.classList.add('bg-blue-600', 'text-white');
        else if (status === 'new') activeBtn.classList.add('bg-yellow-500', 'text-white');
        else if (status === 'read') activeBtn.classList.add('bg-cyan-500', 'text-white');
        else if (status === 'replied') activeBtn.classList.add('bg-green-500', 'text-white');
    }
    
    // Filter rows
    rows.forEach(row => {
        if (status === 'all' || row.getAttribute('data-status') === status) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
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
    
    // Add event listeners for filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const status = this.getAttribute('data-status');
            filterContacts(status);
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
    
    // Set initial filter to 'all'
    filterContacts('all');
});