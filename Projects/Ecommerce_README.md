# 🛒 E-Commerce Application

A full-stack e-commerce platform with a Next.js frontend and an Express.js backend. It features role-based authentication, dynamic product management, order tracking, a fully customizable landing page, blog management, user interaction analytics, and a comprehensive admin dashboard.

---

## 🚀 Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| [Next.js 15](https://nextjs.org/) (React 19) | Framework & UI library |
| [Tailwind CSS v4](https://tailwindcss.com/) | Styling |
| [Axios](https://axios-http.com/) | HTTP client / data fetching |
| [Recharts](https://recharts.org/) | Admin analytics charts |
| [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/) | Icon libraries |
| [React Hot Toast](https://react-hot-toast.com/) | Toast notifications |

### Backend
| Technology | Purpose |
|---|---|
| [Node.js](https://nodejs.org/) + [Express.js 5](https://expressjs.com/) | Server & REST API |
| [MySQL](https://www.mysql.com/) + [Sequelize ORM](https://sequelize.org/) | Database & ORM |
| [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) | JWT authentication (24h expiry) |
| [bcrypt](https://github.com/kelektiv/node.bcrypt.js) | Password hashing |
| [Nodemailer](https://nodemailer.com/) | Transactional emails |
| [Multer](https://github.com/expressjs/multer) + [express-fileupload](https://github.com/richardgirges/express-fileupload) | File & image uploads |
| [Helmet](https://helmetjs.github.io/) | Secure HTTP headers |
| [express-rate-limit](https://github.com/nfriedly/express-rate-limit) | Rate limiting |
| [cors](https://github.com/expressjs/cors) | Cross-origin resource sharing |
| [xss-clean](https://github.com/jsonmaur/xss-clean) | XSS sanitization |
| [hpp](https://github.com/analog-nico/hpp) | HTTP parameter pollution protection |
| [cookie-parser](https://github.com/expressjs/cookie-parser) | Cookie handling |

---

## 📁 Project Structure

```
ecommerce/
├── Frontend/               # Next.js application
│   ├── app/
│   │   ├── admin/          # Admin panel pages
│   │   ├── adminAuth/      # Admin login/logout
│   │   └── users/          # Customer-facing pages
│   └── components/         # Shared UI components
│
└── Backend/                # Express.js REST API
    ├── controllers/        # Route handler logic
    ├── services/           # Business logic layer
    ├── models/             # Sequelize ORM models
    ├── routes/             # API route definitions
    ├── middlewares/        # Auth, error handling
    ├── validations/        # Input validation rules
    ├── utils/              # Helpers (ApiResponse, catchAsync)
    ├── config/             # Database configuration
    └── public/             # Static file uploads
```

---

## ✨ Features

### 👤 User Features
- **Registration & Login** — validated sign-up with name, username, email, password, age, and gender
- **JWT Authentication** — secure token-based sessions with 24-hour expiry and token blacklisting on logout
- **Profile Management** — view and update personal details
- **Shopping Cart** — add, remove, and update item quantities; view cart totals
- **Wishlist** — save and manage favourite products
- **Checkout & Orders** — place orders with shipping/billing address, payment method, and notes
- **Order Tracking** — view order history and real-time status updates
- **Return & Exchange Requests** — submit requests with reason and supporting images
- **Newsletter Subscription** — subscribe and unsubscribe from email newsletters
- **Contact / Enquiry** — submit enquiries via contact form
- **Product Browsing** — filter by category, brand, and main category; view variants by color and size
- **Blog Reading** — read full blog posts with images and rich content
- **Unsubscribe Page** — dedicated newsletter unsubscribe page

### 🛠️ Admin Features
- **Two-Tier Admin System** — `main_admin` (full access) and `admin` (standard access) roles
- **Admin Management** — create, edit, and delete admin accounts (main admin only)
- **User Management** — view all users, block/unblock accounts, send discount emails
- **Product Management** — add, edit, and delete products with multiple color variants, size/stock, pricing, discounts, coupons, images, and videos
- **Order Management** — view all orders, update order status with comments, manage returns and exchanges
- **Blog Management** — create, edit, and delete blog posts with image uploads
- **Landing Page Editor** — configure hero title, description, and up to 10 featured product collections
- **Home Page Control** — manage dynamic product sections shown on the homepage
- **Social Links Management** — set Instagram, Twitter, Facebook, LinkedIn, YouTube, and WhatsApp links
- **Enquiry & Newsletter Management** — view and delete enquiries and newsletter subscribers
- **Analytics Dashboard** — charts for order statistics and interaction data

### 📊 Analytics & Interactions
- Track user interactions per product (views, wishlist, cart activity)
- Per-product interaction stats (wishlist count, cart count)
- Popular products algorithm based on interaction data
- Order statistics overview for the admin dashboard

---

## 🔌 API Reference

### Users — `/users`
| Method | Endpoint | Description |
|---|---|---|
| POST | `/register` | Register a new user |
| POST | `/login` | Login and receive JWT |
| GET | `/profile` | Get current user profile (auth required) |
| PUT | `/profile` | Update user profile (auth required) |
| GET | `/logout` | Logout and blacklist token (auth required) |
| GET | `/all` | Get all users |
| PATCH | `/block/:id` | Toggle block/unblock user |
| POST | `/send-discount` | Send promotional email to user |
| POST | `/Newsletter` | Subscribe to newsletter |
| GET | `/Newsletter` | Get all newsletter subscribers |
| DELETE | `/Newsletter/:id` | Delete a subscriber |
| DELETE | `/unsubscribe` | Unsubscribe from newsletter |
| POST | `/Enquiry` | Submit a contact enquiry |
| GET | `/Enquiry` | Get all enquiries |
| DELETE | `/Enquiry/:id` | Delete an enquiry |

### Admins — `/admins`
| Method | Endpoint | Description |
|---|---|---|
| POST | `/login` | Admin login |
| GET | `/profile` | Get admin profile (auth required) |
| GET | `/logout` | Admin logout (auth required) |
| GET | `/getAllAdmins` | List all admins (main admin only) |
| POST | `/register` | Create a new admin (main admin only) |
| PATCH | `/editAdmin/:id` | Update admin details (main admin only) |
| DELETE | `/deleteAdmin/:id` | Delete an admin (main admin only) |

### Products — `/products`
| Method | Endpoint | Description |
|---|---|---|
| POST | `/add` | Add a new product with variants and media |
| GET | `/` | Get all products |
| GET | `/:id` | Get product by ID |
| PUT | `/:id` | Update a product |
| DELETE | `/:id` | Delete a product |
| POST | `/wishlist/add` | Add product to wishlist |
| POST | `/wishlist/remove` | Remove product from wishlist |
| GET | `/wishlist/:userId` | Get user's wishlist |
| POST | `/cart/add` | Add product to cart |
| POST | `/cart/remove` | Remove product from cart |
| POST | `/cart/update` | Update cart item quantity |
| GET | `/cart/:userId` | Get user's cart |

### Orders — `/orders`
| Method | Endpoint | Description |
|---|---|---|
| POST | `/create` | Place a new order |
| GET | `/all` | Get all orders (admin) |
| GET | `/user/:userId` | Get orders for a user |
| GET | `/stats/overview` | Order statistics (admin) |
| GET | `/:orderId` | Get order by ID |
| PUT | `/:orderId/status` | Update order status |
| PUT | `/:orderId/cancel` | Cancel an order |
| POST | `/return-exchange` | Submit return/exchange request |
| GET | `/return-exchange` | Get all return/exchange requests |
| PUT | `/return-exchange/:requestId` | Update return/exchange status |

### Blogs — `/blogs`
| Method | Endpoint | Description |
|---|---|---|
| POST | `/` | Create a blog post (with image upload) |
| GET | `/` | Get all blog posts |
| GET | `/:id` | Get blog post by ID |
| PUT | `/:id` | Update a blog post |
| DELETE | `/:id` | Delete a blog post |

### Landing Page — `/landing`
| Method | Endpoint | Description |
|---|---|---|
| GET | `/landing` | Get landing page configuration |
| POST | `/landing` | Save landing page configuration |
| POST | `/upload/collection` | Upload a collection/banner image |

### Home Products — `/home-products`
| Method | Endpoint | Description |
|---|---|---|
| GET | `/home-products` | Get homepage product sections |
| POST | `/home-products` | Save homepage product sections |

### User Interactions — `/interactions`
| Method | Endpoint | Description |
|---|---|---|
| POST | `/track` | Track a user-product interaction |
| POST | `/wishlist/update` | Update wishlist status |
| POST | `/cart/update` | Update cart status |
| GET | `/user/:userId` | Get all interactions for a user |
| GET | `/product/:productId/stats` | Get interaction stats for a product |
| GET | `/popular` | Get popular products |
| GET | `/user/:userId/wishlist` | Get user wishlist with interaction data |
| GET | `/user/:userId/cart` | Get user cart with interaction data |
| DELETE | `/remove` | Remove an interaction |

### Site Configuration
| Method | Endpoint | Description |
|---|---|---|
| GET | `/social-links` | Get social media links |
| PUT | `/social-links` | Update social media links |

---

## 🗄️ Data Models

| Model | Key Fields |
|---|---|
| **User** | id, name, username, email, password (hashed), age, gender, is_blocked, role (`customer` / `admin` / `main_admin`) |
| **Product** | id, product_name, brand, category, main_category, short_description, sections (JSON) |
| **ProductVariant** | product_id, color, price, discount, sizes (JSON), features (JSON), coupons (JSON), main_image, related_images (JSON), videos (JSON) |
| **Order** | user_id, order_number, total_amount, discount_amount, shipping_amount, tax_amount, final_amount, payment_method, shipping_address (JSON), billing_address (JSON), order_status, shipping_carrier, shipping_tracking_number, estimated_delivery_date |
| **OrderItem** | order_id, product_id, product_name, product_image, quantity, unit_price, total_price, size, color |
| **OrderStatusHistory** | order_id, status, comment, changed_by |
| **ReturnExchangeRequest** | order_id, order_item_id, user_id, request_type, reason, description, images (JSON), status, admin_comment, refund_amount |
| **UserInteraction** | user_id, product_id, isWishlisted, isInCart, cart_quantity |
| **Lead** | type (`enquiry` / `newsletter`), name, email, message, status |
| **BlacklistToken** | token (invalidated tokens on logout) |
| **SiteConfiguration** | key, value (JSON) — stores landing page, social links, home sections |

---

## 🔒 Security

- **JWT + Token Blacklisting** — tokens are invalidated on logout using a blacklist table
- **Bcrypt** — passwords are hashed with a salt factor of 10 before storage
- **Helmet** — sets secure HTTP response headers
- **Rate Limiting** — 1000 requests per IP per 15 minutes on `/users` and `/admins`
- **XSS Protection** — input sanitization via `xss-clean`
- **HPP** — guards against HTTP parameter pollution attacks
- **CORS** — restricted to configured origins with credentials support
- **Role-Based Access Control** — `customer`, `admin`, and `main_admin` roles enforced at middleware level

---

## 🛠️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18+
- [MySQL](https://www.mysql.com/) running locally or remotely

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in `Backend/` and add the following variables:
   ```env
   PORT=4000
   DB_HOST=localhost
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_NAME=your_db_name
   JWT_SECRET=your_jwt_secret
   EMAIL_USER=your_email@example.com
   EMAIL_PASS=your_email_password
   NODE_ENV=development
   ```

4. Start the backend server:
   ```bash
   npm run start
   ```
   The server will sync Sequelize models and start on `http://localhost:4000`.

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in `Frontend/` and configure the API URL:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:4000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`.

### Creating the First Main Admin

Use the provided script to seed the initial `main_admin` account:
```bash
cd Backend
node scripts/create-admin.js
```

---

## 🗂️ Frontend Pages

### Customer Pages (`/users`)
| Route | Page |
|---|---|
| `/users/Home` | Homepage with dynamic landing banner and product sections |
| `/users/Products` | Full product catalog with filtering |
| `/users/Productdisplay/[id]` | Product detail with variant selection |
| `/users/Cart` | Shopping cart |
| `/users/Wishlist` | Saved wishlist items |
| `/users/Checkout` | Checkout flow |
| `/users/Dashboard` | User order history and interaction summary |
| `/users/Account` | Profile management |
| `/users/Blogs` | Blog listing |
| `/users/BlogDetailPage/[id]` | Full blog post view |
| `/users/ContactUs` | Contact / enquiry form |
| `/users/AboutUs` | About page |
| `/users/UnsubscribeNewsLetter` | Newsletter unsubscribe page |

### Admin Pages (`/admin`)
| Route | Page |
|---|---|
| `/admin/dashboard` | Analytics dashboard with charts |
| `/admin/AddProducts` | Add new product with variants and media |
| `/admin/ManageProducts` | Edit and delete existing products |
| `/admin/ManageOrders` | View and manage all orders |
| `/admin/ManageBlogs` | Create, edit, and delete blog posts |
| `/admin/ManageUsers` | View users, block/unblock accounts |
| `/admin/ManageAdmins` | Create and manage admin accounts |
| `/admin/HomePageControl` | Configure homepage product sections |
| `/admin/EditLandingPage` | Edit hero banner and featured collections |
| `/admin/ManageSocialLinks` | Update social media links |
| `/admin/Enquiry` | View and manage contact enquiries |
