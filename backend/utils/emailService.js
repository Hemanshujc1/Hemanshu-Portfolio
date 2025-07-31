const nodemailer = require('nodemailer');

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail', // or your preferred email service
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS // Use app password for Gmail
    }
  });
};

// Send notification email to yourself when someone contacts you
const sendNotificationEmail = async (contactData) => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log('Email credentials not configured, skipping email notification');
    return;
  }

  const transporter = createTransporter();
  
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.NOTIFICATION_EMAIL || process.env.EMAIL_USER,
    subject: `New Contact Form Submission: ${contactData.subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #007bff; margin-top: 0;">Contact Details:</h3>
          <p><strong>Name:</strong> ${contactData.firstName} ${contactData.lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${contactData.email}">${contactData.email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${contactData.number}">${contactData.number}</a></p>
          <p><strong>Subject:</strong> ${contactData.subject}</p>
        </div>
        
        <div style="background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 5px;">
          <h3 style="color: #007bff; margin-top: 0;">Message:</h3>
          <p style="line-height: 1.6; color: #333;">${contactData.message}</p>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 5px;">
          <p style="margin: 0; font-size: 12px; color: #6c757d;">
            This email was sent from your portfolio contact form on ${new Date().toLocaleString()}.
          </p>
        </div>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Notification email sent successfully');
  } catch (error) {
    console.error('Failed to send notification email:', error);
    throw error;
  }
};

// Send auto-reply email to the person who contacted you
const sendAutoReplyEmail = async (contactData) => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log('Email credentials not configured, skipping auto-reply');
    return;
  }

  const transporter = createTransporter();
  
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: contactData.email,
    subject: `Thank you for contacting me - ${contactData.firstName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
          Thank You for Your Message!
        </h2>
        
        <p>Hi ${contactData.firstName},</p>
        
        <p>Thank you for reaching out through my portfolio website. I've received your message about "<strong>${contactData.subject}</strong>" and I appreciate you taking the time to contact me.</p>
        
        <p>I'll review your message and get back to you as soon as possible, typically within 24-48 hours.</p>
        
        <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p style="margin: 0;"><strong>Your message summary:</strong></p>
          <p style="margin: 10px 0 0 0; font-style: italic;">"${contactData.message.substring(0, 100)}${contactData.message.length > 100 ? '...' : ''}"</p>
        </div>
        
        <p>In the meantime, feel free to:</p>
        <ul>
          <li>Check out my other projects on my portfolio</li>
          <li>Connect with me on LinkedIn or GitHub</li>
          <li>Call me directly at <a href="tel:+917021552408">+91 7021552408</a> if it's urgent</li>
        </ul>
        
        <p>Best regards,<br>
        <strong>Hemanshu</strong><br>
        Full Stack Developer</p>
        
        <div style="margin-top: 30px; padding: 15px; background-color: #e9ecef; border-radius: 5px;">
          <p style="margin: 0; font-size: 12px; color: #6c757d;">
            This is an automated response. Please do not reply to this email directly.
          </p>
        </div>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Auto-reply email sent successfully');
  } catch (error) {
    console.error('Failed to send auto-reply email:', error);
    throw error;
  }
};

module.exports = {
  sendNotificationEmail,
  sendAutoReplyEmail
};