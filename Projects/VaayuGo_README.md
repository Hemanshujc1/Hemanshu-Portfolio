# VaayuGO

![VaayuGO Logo](https://via.placeholder.com/150)

VaayuGO is a full-stack delivery and marketplace platform built for three distinct roles — customers, shopkeepers, and administrators. It handles the complete commerce lifecycle from product discovery and cart management through order fulfillment, Xerox services, and automated financial settlements.

---

## 🚀 Features

### 🛡️ Admin
- **Dashboard**: Centralized overview of platform activity, revenue, and key metrics.
- **User & Shop Management**: View, manage, and moderate all registered customers and shops.
- **Shop Orders**: Monitor and manage orders across all shops from a single view.
- **Shop Products**: Inspect and manage product catalogs for any shop.
- **Category Management**: Create and organize product categories platform-wide.
- **Location Management**: Configure delivery zones and serviceable areas.
- **Delivery Slots**: Define and manage time-based delivery windows.
- **Global Rules Engine**: Set platform-wide behavior and pricing rules.
- **Discount Rules**: Create and manage promotional discount logic.
- **Penalty System**: Issue, track, and automatically integrate penalties into shop settlements.
- **Settlement Management**: Automated settlement generation with detailed ledgers and revenue logs.
- **Bulk Operations**: CSV and Zip-based bulk uploads for products and storefronts.
- **Customer Details**: Drill into individual customer profiles and activity.

### 🏪 Shopkeeper
- **Shop Registration & Onboarding**: Guided shop setup and profile configuration.
- **Dashboard**: Overview of shop performance, recent orders, and earnings.
- **Order Management**: Real-time order processing with status updates and history, including filters for active, completed, and scheduled orders.
- **Product Manager**: Add, edit, and organize individual products with category tagging.
- **Bulk Upload**: CSV-based bulk product creation and updates.
- **Xerox Service Module**: Optional service that can be enabled independently of product sales.
  - Configure Black & White and Color printing prices (single/double-sided).
  - Dynamic binding options management (Spiral, Hard Binding, etc.) with per-document or per-page pricing.
  - Enable/disable the service at any time.
- **Earnings & Settlements**: Visibility into revenue, pending settlements, and financial history.
- **Shop Profile**: Manage shop details, operating hours, and service configuration.

### 🛍️ Customer
- **Home & Discovery**: Browse shops and products with smart filtering and search.
- **Shop Details**: View shop info, product listings, Xerox service pricing, and binding options.
- **Cart**: Add products and Xerox orders; manage quantities before checkout.
- **Checkout**: Dynamic checkout flow with delivery slot selection and address management.
- **Order Tracking**: Real-time order status updates from placement to delivery.
- **Order History**: Full history with detailed per-order breakdowns.
- **Profile Management**: Manage personal details, saved addresses, and preferences.

### 🔐 Auth & Platform
- **Role-Based Access**: Separate flows for `admin`, `shopkeeper`, and `customer` roles, each with protected routes.
- **Email Verification**: OTP-based account verification on registration with automatic resend for unverified users.
- **Forgot / Reset Password**: Secure password recovery via email.
- **JWT Authentication**: Stateless auth with token-based session management.
- **Contact / Support**: In-platform contact form with email notifications.
- **Company Overview**: Public-facing information page.

### ⚙️ Backend & Infrastructure
- **Automated Cron Jobs**:
  - Settlement generation on a scheduled cycle.
  - Cleanup of uploaded documents linked to cancelled/delivered orders.
  - Deletion of unverified user accounts after a timeout window.
  - Shop status updates based on operating hours.
- **File Management**: Image optimization on upload via Sharp; structured upload folder management.
- **PDF Generation**: Automated invoice and report generation.
- **Discount Engine**: Configurable rules applied dynamically at checkout.
- **Delivery Rules**: Flexible rule configuration per location and slot.

---

## 🛠 Tech Stack

### Frontend
| Library / Tool | Version | Purpose |
|---|---|---|
| React | 19 | UI framework |
| Vite | 7 | Build tool and dev server |
| Tailwind CSS | 4 | Utility-first styling |
| React Router DOM | 7 | Client-side routing |
| Axios | 1.x | HTTP client |
| Lucide React | 0.575 | Icon system |
| React Hot Toast | 2.x | Notifications |
| jsPDF + AutoTable | 4.x / 5.x | Client-side PDF generation |
| jwt-decode | 4.x | JWT token parsing |

### Backend
| Library / Tool | Version | Purpose |
|---|---|---|
| Node.js | 20+ | Runtime |
| Express | 5 | Web framework |
| Sequelize | 6 | ORM |
| MySQL2 | 3.x | Database driver |
| bcryptjs | 3.x | Password hashing |
| jsonwebtoken | 9.x | JWT auth |
| Nodemailer | 8.x | Email notifications |
| Multer | 2.x | File uploads |
| Sharp | 0.34 | Image optimization |
| pdf-lib | 1.17 | Server-side PDF generation |
| node-cron | 4.x | Scheduled jobs |
| csv-parser | 3.x | CSV bulk upload processing |
| adm-zip | 0.5 | Zip file handling for bulk ops |
| helmet | 8.x | HTTP security headers |
| decimal.js | 10.x | Precise financial calculations |
| dotenv | 17.x | Environment configuration |

### Database
- **MySQL 8.0+** — Relational data storage with Sequelize-managed schemas and associations.

---

## 📦 Getting Started

### Prerequisites

- **Node.js**: v20 or higher
- **MySQL**: 8.0+
- **Package Manager**: npm

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Hemanshujc1/VaayuGo.git
   cd VaayuGo
   ```

2. **Install dependencies** (client and server):
   ```bash
   npm run install-all
   ```

3. **Configure environment variables**:
   Create `.env` files in both `client/` and `server/` directories. See `.env.example` files for required keys.

4. **Initialize the database**:
   ```bash
   cd server
   npm run db:init
   ```

5. **Start the development servers**:
   ```bash
   # From root
   npm run dev
   ```

---

## 📐 Architecture

```
VaayuGO/
├── client/          # Vite + React frontend
│   └── src/
│       ├── pages/   # Role-based pages (admin / shopkeeper / customer / shared)
│       ├── components/  # Layout, shared UI, and role-specific components
│       ├── context/ # Auth, Cart, and Confirm global state
│       └── api/     # Axios instance and interceptors
│
└── server/          # Express REST API
    ├── controllers/ # Request handlers (auth, orders, shop, xerox, admin, etc.)
    ├── models/      # Sequelize models and associations
    ├── middlewares/ # JWT auth, role guards, error handling, file uploads
    ├── routes/      # API route definitions
    ├── cron/        # Scheduled background jobs
    └── config/      # Database connection
```

- **Routing**: Role-based protected routes — each user type sees only their relevant interface.
- **API Pattern**: Controller → Service → Model, keeping business logic separate from route definitions.
- **Auth**: JWT tokens validated via middleware on all protected endpoints.
- **File Uploads**: Multer handles inbound files; Sharp optimizes images before storage; cron jobs manage lifecycle cleanup.

---

Built with ❤️ by the VaayuGO Team.
