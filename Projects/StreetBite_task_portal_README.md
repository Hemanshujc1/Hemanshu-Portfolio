# StreetBite Task Management Portal

A comprehensive web application designed to streamline the Task Assignment and tracking process for employees at StreetBite. The portal provides distinct interfaces for Administrators (HR/Managers/Super Admins) and Employees to manage tasks, documents, and track progress efficiently.

## 🚀 Features

### 💎 UI/UX & Platform
- **Premium Glassmorphism Design**: Sleek, modern frosted-glass interfaces with deep, animated gradients.
- **Fluid Animations**: Smooth page transitions and micro-interactions powered by Framer Motion.
- **Responsive Layouts**: Fully optimized for mobile, tablet, and desktop viewing.

### 👨‍💼 Admin & Super Admin Portal
- **Role-Based Access Control**: Support for `admin`, `hr-admin`, `manager-admin`, `it-admin`, and `employee` roles.
- **Dashboard Analytics**: Real-time statistics on employee states and task metrics (Tasks In Progress, Overdue, In Review, Completed).
- **Employee Management**:
  - Add new employees and monitor their active status.
  - View comprehensive employee profiles, edit details, and track individual task progress via progress bars.
  - Export reports using PDF generation tools.
- **Task & Template Management**:
  - Create and manage Task Templates for standardized, recurring assignments.
  - Assign tasks to employees individually or dynamically via templates.
  - Verify submitted tasks and distinguish between "Resource" files (Admin uploaded) and "Submission" files (Employee uploaded).

### 👨‍💻 Employee Portal
- **Personalized Dashboard**: A dedicated view of pending, overdue, in-review, and completed tasks.
- **Task Execution**:
  - View task details and securely download admin-provided resources.
  - Submit work via secure file uploads or external URLs.
  - Status updates automatically progress from "In Progress" -> "Pending" (In Review) -> "Completed" upon Admin verification.
- **Profile & Manager Details**: View and edit personal details and securely access assigned manager contact information.

## 🔒 Security Features

- **Authentication & Authorization**: Secure stateless sessions using JWT (JSON Web Tokens) with robust Role-Based Access Control (RBAC) to ensure users only access what they are permitted to.
- **Password Security**: Passwords are securely hashed and salted using `bcryptjs` before storage.
- **SQL Injection Prevention**: All database queries are parameterized using the `mysql2` execute method to prevent SQL injection attacks.
- **Secure File Handling**: File uploads are processed securely using `multer`, with isolated upload directories to prevent directory traversal attacks.
- **CORS Protection**: Configurable Cross-Origin Resource Sharing (CORS) limits API access to authorized domains.
- **Environment Management**: Sensitive credentials, keys, and database configurations are strictly managed via environment variables (`.env`).

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React.js (Vite)
- **Styling**: Tailwind CSS, Glassmorphism UI
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **PDF Generation**: jsPDF & jsPDF-AutoTable
- **HTTP Client**: Axios

### Backend
- **Environment**: Node.js & Express.js
- **Database**: MySQL (using `mysql2`)
- **Authentication**: JWT (JSON Web Tokens), `bcryptjs` for password hashing
- **File Uploads**: Multer
- **Image Processing**: Sharp
- **Email Service**: Nodemailer

---

## 🔌 API Documentation

### Base URL: `/api`

### 1. Authentication (`/auth`)
| Method | Endpoint                | Description                                                                 | Access  |
| :----- | :---------------------- | :-------------------------------------------------------------------------- | :------ |
| `POST` | `/login`                | Authenticate user and get JWT token. Updates first/last login timestamps.   | Public  |
| `POST` | `/register`             | Register a new user (Self-registration).                                    | Public  |
| `POST` | `/register-admin`       | Register a new admin (Setup only).                                          | Public  |
| `POST` | `/logout`               | Clear session/cookie.                                                       | Private |
| `GET`  | `/me`                   | Get current user details.                                                   | Private |
| `POST` | `/forgotpassword`       | Initiate password reset via email.                                          | Public  |
| `PUT`  | `/resetpassword/:token` | Reset password using encrypted token.                                       | Public  |

### 2. Employee Management (`/employees`)
| Method   | Endpoint | Description                    | Access  |
| :------- | :------- | :----------------------------- | :------ |
| `GET`    | `/`      | Get all employees.             | Admin   |
| `POST`   | `/`      | Create a new employee.         | Admin   |
| `GET`    | `/:id`   | Get specific employee details. | Private |
| `PUT`    | `/:id`   | Update employee details.       | Private |
| `DELETE` | `/:id`   | Delete an employee.            | Admin   |

### 3. Task Management (`/tasks`)
| Method   | Endpoint        | Description                                                    | Access  |
| :------- | :-------------- | :------------------------------------------------------------- | :------ |
| `POST`   | `/assign`       | Assign a new task to an employee.                              | Admin   |
| `GET`    | `/:id`          | Get task details (including attachments).                      | Private |
| `PUT`    | `/:id`          | Update task (status, submissions). Preserves attachment roles. | Private |
| `DELETE` | `/:id`          | Delete a task.                                                 | Admin   |
| `GET`    | `/employee/:id` | Get all tasks for a specific employee.                         | Private |

### 4. Task Templates (`/templates`)
| Method   | Endpoint         | Description                                       | Access |
| :------- | :--------------- | :------------------------------------------------ | :----- |
| `GET`    | `/`              | Get all templates.                                | Admin  |
| `POST`   | `/`              | Create a new template.                            | Admin  |
| `GET`    | `/:id`           | Get template details.                             | Admin  |
| `PUT`    | `/:id`           | Update template metadata.                         | Admin  |
| `DELETE` | `/:id`           | Delete a template.                                | Admin  |
| `GET`    | `/tasks/:taskId` | Get details of a specific task within a template. | Admin  |
| `PUT`    | `/tasks/:taskId` | Update a specific task within a template.         | Admin  |

### 5. File Uploads (`/upload`)
| Method | Endpoint | Description                        | Access  |
| :----- | :------- | :--------------------------------- | :------ |
| `POST` | `/`      | Upload a file (Returns file path). | Private |

---

## 🏃‍♂️ Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone <repository_url>
   cd Portal
   ```

2. **Database Setup**
   - Ensure MySQL is running on your system.
   - Configure `.env` in the `Backend/` folder with your DB credentials:
     ```env
     DB_HOST=localhost
     DB_USER=root
     DB_PASSWORD=yourpassword
     DB_NAME=vakrangee_onboarding_db
     DB_PORT=3306
     JWT_SECRET=your_secret_key
     ```

3. **Backend Initialization & Seeding**
   ```bash
   cd Backend
   npm install
   
   # Automatically create tables and columns
   node sync_db.js
   
   # Create initial super-admin account
   node seed_super_admin.js
   
   # Start the backend server
   npm run dev
   ```

4. **Frontend Setup**
   ```bash
   cd ../Frontend
   npm install
   
   # Start the Vite development server
   npm run dev
   ```
