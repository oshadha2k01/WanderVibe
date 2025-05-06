const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    
    // Test the connection with a simple write operation
    const testCollection = conn.connection.collection('connection_tests');
    await testCollection.insertOne({ test: true, timestamp: new Date() });
    console.log('Database write test successful');
    
    return conn;
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    // Log more details about the error
    if (error.code) {
      console.error(`Error code: ${error.code}`);
    }
    process.exit(1);
  }
};

module.exports = connectDB;
