## Hemanshu Portfolio

Modern, responsive frontend portfolio showcasing projects, experience, and skills. The app is built with React + Vite, styled using Tailwind CSS, and animated with Framer Motion, currently deployed on Vercel.

### Live
- **Frontend**: `https://hemanshujc-portfolio.vercel.app`

---

## Key Features

- **Premium UI/UX**: Features a highly modern, responsive design using Tailwind CSS and Framer Motion, complete with glassmorphism effects, dynamic abstract components, and smooth micro-interactions.
- **Performance Optimized**: Implements modern web performance best practices, including image preloading and `fetchpriority` directives for near-instant LCP (Largest Contentful Paint) load times.
- **Component-Driven Architecture**: Built with scalable React components for easy maintenance and future expansions.
- **Fully Responsive**: Optimized for both desktop and mobile devices.

---

## Tech Stack

- **Frontend Framework**: React 19, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **Routing**: React Router
- **Forms & State**: React Hook Form

---

## Project Structure

```text
Hemanshu Portfolio/
├─ public/                     # Frontend static assets
├─ src/                        # Frontend source
│  ├─ assets/                  # Images, SVGs, and other local assets
│  ├─ components/              # Reusable UI components
│  ├─ pages/                   # Main page routes (Home, About, Projects, etc.)
│  └─ main.jsx, App.jsx        # App bootstrap and routing
├─ vercel.json                 # Vercel deployment configuration
├─ tailwind.config.js          # Tailwind CSS configuration
└─ vite.config.js              # Vite bundler configuration
```

---

## Quick Start (Local Development)

Prerequisites: Node 18+, npm

1) **Install dependencies**
```bash
npm install
```

2) **Run the development server**
```bash
npm run dev
```
The app will be available at `http://localhost:5173`.

---

## Scripts

```bash
npm run dev        # Vite dev server (http://localhost:5173)
npm run build      # Production build to dist/
npm run preview    # Preview the production build locally
npm run lint       # Run ESLint
```

---

## Deployment

### Vercel
1. Connect your repository to Vercel.
2. The default build settings will automatically detect Vite:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. `vercel.json` ensures that client-side routing works by rewriting all requests to `/index.html`.

---

## License & Contact

- **License**: All rights reserved (portfolio project).
- **Author**: Hemanshu
- **Email**: `hemanshuwork26@gmail.com`
- **LinkedIn**: `https://linkedin.com/in/hemanshuchoudhary`
- **GitHub**: `https://github.com/Hemanshujc1`
- **Portfolio**: `https://hemanshujc-portfolio.vercel.app`

