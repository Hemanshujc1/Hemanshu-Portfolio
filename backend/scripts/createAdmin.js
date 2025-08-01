const mongoose = require('mongoose');
const Admin = require('../models/Admin');
require('dotenv').config();

async function createAdmin() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio');
    console.log('Connected to MongoDB');

    // Check if admin already exists
    const existingAdmin = await Admin.findOne();
    if (existingAdmin) {
      console.log('Admin user already exists!');
      console.log(`Username: ${existingAdmin.username}`);
      console.log(`Email: ${existingAdmin.email}`);
      process.exit(0);
    }

    // Create default admin
    const adminData = {
      username: 'admin',
      email: 'admin@portfolio.com',
      password: 'admin123', // This will be hashed automatically
      role: 'super_admin'
    };

    const admin = new Admin(adminData);
    await admin.save();

    console.log('✅ Admin user created successfully!');
    console.log('Login credentials:');
    console.log(`Username: ${adminData.username}`);
    console.log(`Email: ${adminData.email}`);
    console.log(`Password: ${adminData.password}`);
    console.log('\n⚠️  Please change the default password after first login!');
    
  } catch (error) {
    console.error('Error creating admin:', error);
  } finally {
    await mongoose.connection.close();
    process.exit(0);
  }
}

// Run if called directly
if (require.main === module) {
  createAdmin();
}

module.exports = createAdmin;