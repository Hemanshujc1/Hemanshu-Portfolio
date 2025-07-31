# Portfolio Backend

This is the backend API for the portfolio contact form, built with Node.js, Express, and MongoDB.

## Features

- Contact form submission with validation
- MongoDB storage for contact messages
- Email notifications (optional)
- Rate limiting for security
- Admin dashboard to view submissions
- RESTful API endpoints

## Setup Instructions

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Environment Configuration
Copy the example environment file and configure your settings:
```bash
cp .env.example .env
```

Edit `.env` with your configuration:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
FRONTEND_URL=http://localhost:5173

# Optional: Email notifications
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
NOTIFICATION_EMAIL=your-email@gmail.com
```

### 3. MongoDB Setup
Make sure MongoDB is installed and running on your system:

**macOS (using Homebrew):**
```bash
brew install mongodb-community
brew services start mongodb-community
```

**Or use MongoDB Atlas (cloud):**
- Create account at https://www.mongodb.com/atlas
- Create a cluster and get connection string
- Update MONGODB_URI in .env

### 4. Email Configuration (Optional)
For email notifications, you'll need:
- Gmail account with 2FA enabled
- App password generated from Google Account settings
- Update EMAIL_USER and EMAIL_PASS in .env

### 5. Start the Server
```bash
# Development mode with auto-restart
npm run dev

# Production mode
npm start
```

The server will start on http://localhost:5000

## API Endpoints

### Contact Form
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contacts (admin)
- `PUT /api/contact/:id/status` - Update contact status

### Admin
- `GET /admin/dashboard` - View contact submissions

### Health Check
- `GET /api/health` - Server health status

## Frontend Integration

Update your frontend to use the new backend endpoint:

```javascript
const response = await fetch('http://localhost:5000/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
});
```

## Security Features

- Rate limiting (10 requests per 15 minutes per IP)
- Input validation and sanitization
- CORS protection
- Helmet security headers
- MongoDB injection protection

## Database Schema

Contact submissions are stored with:
- firstName, lastName
- email, number
- subject, message
- status (new/read/replied)
- timestamps

## Admin Dashboard

Visit http://localhost:5000/admin/dashboard to view all contact submissions.

## Production Deployment

### Render Deployment
1. Connect your GitHub repository to Render
2. Set environment variables:
   - `NODE_ENV=production`
   - `FRONTEND_URL=https://your-vercel-app.vercel.app`
   - `MONGODB_URI=your-mongodb-atlas-connection-string`
   - Optional: Email configuration variables
3. Build Command: `npm install`
4. Start Command: `npm start`

### Environment Variables for Render:
```env
NODE_ENV=production
PORT=4001
FRONTEND_URL=https://your-vercel-app.vercel.app
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
EMAIL_USER=your-email@gmail.com (optional)
EMAIL_PASS=your-app-password (optional)
```