# Admin Authentication System

## Overview
This portfolio application now includes a secure admin authentication system that protects the admin dashboard from unauthorized access.

## Security Features

### 🔐 Authentication Protection
- **JWT-based authentication** with 24-hour token expiration
- **Session management** with secure HTTP-only cookies
- **Password hashing** using bcryptjs with salt rounds
- **Automatic session cleanup** on authentication errors

### 🛡️ Route Protection
- **Dashboard protection**: `/admin/dashboard` requires valid authentication
- **Automatic redirects**: Unauthorized users are redirected to login page
- **Session validation**: Expired or invalid tokens trigger re-authentication
- **Cache prevention**: Protected pages cannot be cached by browsers

### 🚫 Security Headers
- **X-Frame-Options**: Prevents clickjacking attacks
- **X-Content-Type-Options**: Prevents MIME type sniffing
- **Referrer-Policy**: Controls referrer information
- **Cache-Control**: Prevents caching of sensitive pages

### ⚡ Rate Limiting
- **Login attempts**: Limited to 5 attempts per 15 minutes per IP
- **Contact form**: Limited to 10 requests per 15 minutes per IP

## Usage

### Initial Setup
1. **Create admin user**:
   ```bash
   cd backend
   npm run create-admin
   ```
   
   Default credentials:
   - Username: `admin`
   - Email: `admin@portfolio.com`
   - Password: `admin123`

2. **Change default password** after first login (recommended)

### Access Points
- **Login**: `http://localhost:4001/admin/login`
- **Dashboard**: `http://localhost:4001/admin/dashboard` (protected)
- **Root admin**: `http://localhost:4001/admin` (redirects based on auth status)

### Authentication Flow
1. User visits `/admin` or `/admin/dashboard`
2. If not authenticated → redirected to `/admin/login`
3. User enters credentials
4. If valid → JWT token stored in session → redirected to dashboard
5. If invalid → error message displayed

### Logout
- POST request to `/admin/logout`
- Session destroyed and redirected to login page
- Logout button available in dashboard header

## API Endpoints

### Public Routes
- `GET /admin/login` - Login page
- `POST /admin/login` - Login authentication

### Protected Routes (require authentication)
- `GET /admin/dashboard` - Admin dashboard
- `PATCH /admin/contact/:id/status` - Update contact status
- `POST /admin/change-password` - Change admin password
- `POST /admin/logout` - Logout

## Error Handling

### Authentication Errors
- **unauthorized**: User tried to access protected route without login
- **expired**: User session has expired
- **invalid**: Invalid or corrupted session data

### Login Errors
- Invalid credentials
- Rate limit exceeded
- Validation errors (empty fields)

## Security Best Practices Implemented

1. **Password Security**
   - Minimum 6 characters required
   - Passwords hashed with bcrypt (12 salt rounds)
   - No plain text password storage

2. **Session Security**
   - HTTP-only cookies (prevents XSS)
   - Secure cookies in production
   - 24-hour session expiration
   - Session destruction on logout/errors

3. **Token Security**
   - JWT tokens with expiration
   - Secret key from environment variables
   - Token validation on each request

4. **Input Validation**
   - Server-side validation using express-validator
   - Sanitization of user inputs
   - Error message standardization

5. **Rate Limiting**
   - Login attempt limiting
   - IP-based restrictions
   - Configurable time windows

## Environment Variables

Required environment variables in `.env`:
```env
JWT_SECRET=your-jwt-secret-key
SESSION_SECRET=your-session-secret-key
MONGODB_URI=your-mongodb-connection-string
```

## Database Models

### Admin Model
```javascript
{
  username: String (unique, required),
  email: String (unique, required),
  password: String (hashed, required),
  role: String (admin/super_admin),
  isActive: Boolean (default: true),
  lastLogin: Date,
  createdAt: Date,
  updatedAt: Date
}
```

## Testing Authentication

### Manual Testing
1. Try accessing `/admin/dashboard` without login → should redirect to login
2. Login with correct credentials → should access dashboard
3. Login with wrong credentials → should show error
4. Logout → should redirect to login and clear session

### Automated Testing
```bash
# Test unauthorized access
curl -I http://localhost:4001/admin/dashboard
# Should return 302 redirect to /admin/login

# Test login page access
curl -I http://localhost:4001/admin/login  
# Should return 200 OK
```

## Troubleshooting

### Common Issues
1. **"Cannot access dashboard"**
   - Check if admin user exists: `npm run create-admin`
   - Verify environment variables are set
   - Check MongoDB connection

2. **"Session expired immediately"**
   - Verify JWT_SECRET is set in environment
   - Check system clock synchronization
   - Clear browser cookies

3. **"Too many login attempts"**
   - Wait 15 minutes for rate limit reset
   - Check IP address restrictions

### Logs
Authentication errors are logged to console with timestamps for debugging.

## Future Enhancements
- Two-factor authentication (2FA)
- Password reset functionality
- Admin user management interface
- Audit logging for admin actions
- Role-based permissions