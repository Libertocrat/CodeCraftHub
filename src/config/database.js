const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from the .env file
dotenv.config();
console.log(`${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PWD}`);

const User = require('../models/userModel');

const connectDB = async () => {
  try {
    // Load MongoDB credentials from .env
    const mongoUser = process.env.MONGO_DB_USER;
    const mongoPwd = process.env.MONGO_DB_PWD;
    const mongoHost = process.env.MONGO_DB_HOST;
    const mongoPort = process.env.MONGO_DB_PORT;

    // Establish connection
    await mongoose.connect(`mongodb://${mongoUser}:${mongoPwd}@${mongoHost}:${mongoPort}`);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};
module.exports = connectDB;