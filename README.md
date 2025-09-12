## Hemanshu Portfolio

Modern, full‑stack portfolio showcasing projects, experience, and a secure contact flow. The frontend is a React + Vite app deployed on Vercel, and the backend is a Node.js/Express API with MongoDB deployed on Render. An admin panel with authentication lets you review and manage contact submissions.

### Live
- **Frontend**: `https://hemanshujc-portfolio.vercel.app`
- **Backend**: `https://hemanshu-portfolio-backend.onrender.com`
- **Admin Panel**: `https://hemanshu-portfolio-backend.onrender.com/admin/login`

---

## Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS, Framer Motion, GSAP, React Router, React Hook Form
- **Backend**: Node.js, Express, MongoDB (Mongoose), EJS
- **Auth & Security**: JWT, express-session, bcryptjs, Helmet, CORS, express-rate-limit, express-validator
- **Email**: Nodemailer (Gmail SMTP/app passwords)

---

## Project Structure

```
Hemanshu Portfolio/
├─ backend/                    # Node/Express API + Admin
│  ├─ app.js                   # Server entry
│  ├─ routes/                  # /admin, /api/contact
│  ├─ models/                  # Mongoose models (Admin, Contact)
│  ├─ utils/                   # auth, email service
│  ├─ views/                   # EJS templates (login, dashboard)
│  ├─ public/                  # Admin assets
│  └─ scripts/createAdmin.js   # Seed an admin user
├─ public/                     # Frontend static assets
├─ src/                        # Frontend source
│  ├─ components/              # UI components
│  ├─ pages/                   # Pages (Home, About, Work, etc.)
│  └─ main.jsx, App.jsx        # App bootstrap
├─ start-dev.sh                # Run frontend + backend together
├─ vercel.json                 # SPA rewrites + headers (frontend)
└─ PROJECT_DOCUMENTATION.md    # Extended docs
```

---

## Quick Start (Local Development)

Prerequisites: Node 18+, npm, MongoDB (local or Atlas)

1) Install dependencies
```bash
# from repo root
npm install
cd backend && npm install && cd ..
```

2) Configure environment
```bash
# frontend
cp .env.example .env.local  # if you keep an example; otherwise create .env.local

# backend
cd backend
cp .env.example .env        # if present; otherwise create .env
```

Minimal env values are listed below.

3) Seed the admin user (backend)
```bash
cd backend
npm run create-admin
```
Default credentials: username `admin`, email `admin@portfolio.com`, password `admin123` (change after first login).

4) Run both servers
```bash
# one command from project root
./start-dev.sh

# or in two terminals
npm run dev           # frontend at http://localhost:5173
cd backend && npm run dev   # backend at http://localhost:4001 (default)
```

---

## Environment Variables

### Frontend (`.env.local`)
```env
VITE_API_URL=http://localhost:4001
```

### Backend (`backend/.env`)
```env
PORT=4001
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
MONGODB_URI=mongodb://localhost:27017/portfolio

# Auth & sessions
JWT_SECRET=replace-with-strong-secret
SESSION_SECRET=replace-with-strong-secret

# Optional: email notifications
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
NOTIFICATION_EMAIL=your-notification-email@gmail.com
```

Notes:
- Backend default port is 4001 (configurable via `PORT`).
- If using MongoDB Atlas, set `MONGODB_URI` to your connection string.
- Email uses Gmail SMTP; enable 2FA and create an app password.

---

## Admin Panel

- **Login**: `http://localhost:4001/admin/login`
- **Dashboard**: `http://localhost:4001/admin/dashboard`
- **Default credentials** (after `npm run create-admin`):
  - username: `admin`
  - email: `admin@portfolio.com`
  - password: `admin123`

Features:
- JWT + session based auth, bcrypt password hashing
- Rate-limited login (5 attempts per 15 minutes)
- View and update contact submission status (new/read/replied)

---

## API Endpoints (Backend)

Base URL (local): `http://localhost:4001`

- **Health**
  - `GET /api/health` → { status: 'OK' }

- **Contact** (`/api/contact`)
  - `GET /api/contact/test` → simple API diagnostics
  - `POST /api/contact` → submit a message
    - Body: `{ FirstName, LastName, Email, Number, Subject, Message }`
  - `GET /api/contact` → list submissions (with pagination query: `page`, `limit`, optional `status`)
  - `PUT /api/contact/:id/status` → update status to one of `new|read|replied`

- **Admin** (`/admin`)
  - `GET /admin/login` → login page (EJS)
  - `POST /admin/login` → authenticate (rate limited)
  - `GET /admin/dashboard` → protected dashboard
  - `PATCH /admin/contact/:id/status` → protected, update a contact
  - `POST /admin/change-password` → protected, change password
  - `POST /admin/logout` → end session

Validation and security:
- Input validation via `express-validator`
- Helmet security headers, CORS, rate limiting

---

## Frontend Scripts (root)

```bash
npm run dev        # Vite dev server (http://localhost:5173)
npm run build      # Production build to dist/
npm run preview    # Preview the production build
npm run lint       # ESLint
```

## Backend Scripts (`backend/`)

```bash
npm run dev          # nodemon app.js
npm start            # node app.js
npm run create-admin # seed default admin user
```

---

## Deployment

### Frontend (Vercel)
- Build: `npm run build`
- Output: `dist`
- `vercel.json` sets SPA rewrites and CORS headers for `/api/*` paths if needed.

### Backend (Render)
- Build command: `npm install`
- Start command: `npm start`
- Environment variables: set all backend `.env` keys
- `FRONTEND_URL` should point to your Vercel app URL

### Database (MongoDB Atlas)
- Create a cluster and user; allow your Render service IPs
- Use the provided connection string in `MONGODB_URI`

---

## Troubleshooting

- **Cannot login to admin**: Ensure admin user exists (`npm run create-admin`), check `JWT_SECRET` and `SESSION_SECRET`, verify MongoDB connection.
- **CORS errors**: Confirm `FRONTEND_URL` and allowed origins in backend CORS configuration.
- **Too many login attempts**: Wait 15 minutes (rate limiting) or adjust the limiter config.
- **Emails not sending**: Verify `EMAIL_USER`, `EMAIL_PASS` (app password), and less‑secure app policies.

---

## License & Contact

- License: All rights reserved (portfolio project).
- Author: **Hemanshu** — email: `hemanshuwork26@gmail.com`
- Portfolio: `https://hemanshujc-portfolio.vercel.app`

