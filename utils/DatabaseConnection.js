import mongoose from 'mongoose';

// Use global variable to cache the database connection
let cached = global.mongooseConn;

// Initialize cache if it doesn't exist
if (!cached) {
    cached = global.mongooseConn = {
        conn: null,
        promise: null
    };
}

// Function to establish and reuse MongoDB connection
async function DatabaseConnection() {

    // Return the existing connection if already established
    if (cached.conn) {
        return cached.conn;
    }

    // Create a new connection if no promise exists yet
    if (!cached.promise) {
        cached.promise = mongoose.connect(process.env.MONGO_URL).then((mongoose) => {
            return mongoose;
        });
    }

    // Wait for the connection promise to resolve and cache it
    cached.conn = await cached.promise;
    console.log("Connected to MongoDB Successfully");
    
    return cached.conn;
}

export default DatabaseConnection;
