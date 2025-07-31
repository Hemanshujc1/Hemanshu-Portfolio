# Deployment Guide

This guide covers deploying the portfolio application with backend on Render and frontend on Vercel.

## 🚀 Backend Deployment (Render)

### 1. Environment Variables on Render

Set these environment variables in your Render dashboard:

```env
NODE_ENV=production
PORT=4001
FRONTEND_URL=https://your-vercel-app.vercel.app
MONGODB_URI=mongodb+srv://hemanshu01:Hemanshudb@cluster0.gfbdrsm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
```

**Optional Email Configuration:**

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
NOTIFICATION_EMAIL=your-email@gmail.com
```

### 2. Render Configuration

- **Build Command:** `cd backend && npm install`
- **Start Command:** `cd backend && npm start`
- **Root Directory:** Leave empty (or set to `/`)

### 3. Get Your Backend URL

After deployment, your backend will be available at:
`https://your-backend-app.onrender.com`

## 🌐 Frontend Deployment (Vercel)

### 1. Environment Variables on Vercel

Set this environment variable in your Vercel dashboard:

```env
VITE_API_URL=https://your-backend-app.onrender.com
```

### 2. Vercel Configuration

Create `vercel.json` in the root directory:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### 3. Build Settings

- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

## 🔧 Post-Deployment Steps

### 1. Update URLs

Replace the placeholder URLs with your actual deployment URLs:

**Frontend (.env):**

```env
VITE_API_URL=https://your-actual-backend-url.onrender.com
```

**Backend (Render Environment Variables):**

```env
FRONTEND_URL=https://your-actual-frontend-url.vercel.app
```

### 2. Test the Contact Form

1. Visit your deployed frontend
2. Fill out the contact form
3. Check if the form submits successfully
4. Verify data is stored in MongoDB
5. Check admin dashboard: `https://your-backend-url.onrender.com/admin/dashboard`

### 3. CORS Configuration

The backend is configured to accept requests from your frontend URL. Make sure the `FRONTEND_URL` environment variable matches your Vercel deployment URL exactly.

## 🛠 Troubleshooting

### Common Issues:

1. **CORS Errors:**

   - Ensure `FRONTEND_URL` in backend matches your Vercel URL exactly
   - Check that both HTTP and HTTPS protocols match

2. **Form Not Submitting:**

   - Verify `VITE_API_URL` in frontend points to correct backend URL
   - Check browser network tab for API call errors

3. **Database Connection:**

   - Verify MongoDB Atlas connection string is correct
   - Ensure IP whitelist includes 0.0.0.0/0 for Render

4. **Environment Variables:**
   - Double-check all environment variables are set correctly
   - Restart deployments after changing environment variables

### Render-Specific:

- Free tier may have cold starts (first request might be slow)
- Check Render logs for any startup errors

### Vercel-Specific:

- Ensure build completes successfully
- Check function logs for any runtime errors

## 📧 Email Configuration (Optional)

To enable email notifications:

1. **Gmail Setup:**

   - Enable 2-Factor Authentication
   - Generate App Password: Google Account → Security → App passwords
   - Use app password (not regular password) in `EMAIL_PASS`

2. **Environment Variables:**
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-16-character-app-password
   NOTIFICATION_EMAIL=your-email@gmail.com
   ```

## 🔍 Monitoring

### Backend Health Check:

`https://your-backend-url.onrender.com/api/health`

### Admin Dashboard:

`https://your-backend-url.onrender.com/admin/dashboard`

### MongoDB Atlas:

Monitor database usage and connections in MongoDB Atlas dashboard.

## 🚀 Going Live Checklist

- [ ] Backend deployed on Render with correct environment variables
- [ ] Frontend deployed on Vercel with correct API URL
- [ ] CORS configured properly
- [ ] Contact form tested and working
- [ ] Database storing submissions correctly
- [ ] Admin dashboard accessible
- [ ] Email notifications working (if configured)
- [ ] All placeholder URLs replaced with actual deployment URLs
