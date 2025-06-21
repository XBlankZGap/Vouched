
// Load environment variables
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser"); // Add this if you're using cookies
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes"); 
const protectedRoutes = require("./routes/protected");

// Connect to MongoDB
connectDB();

// Create Express app
const app = express();

// Middleware - correctly ordered
app.use(cors({
  origin: "http://localhost:5173", // frontend URL
  credentials: true
}));
app.use(express.json());
app.use(cookieParser()); // Only if using cookies (for refreshToken)
  
// Routes
app.use("/api/auth", authRoutes); // Login, signup
app.use("/api/protected", protectedRoutes); // Any secured routes

// Default test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
