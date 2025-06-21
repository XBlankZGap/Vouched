// Load environment variables
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const protectedRoutes = require("./routes/protected");

// Connect to MongoDB
connectDB();

const app = express();

// CORS configuration
app.use(cors({
  origin: "http://localhost:5173", // frontend origin
  credentials: true
}));

// Middleware
app.use(express.json());
app.use(cookieParser()); // needed for parsing cookies (refreshToken)

// Routes
app.use("/api/auth", authRoutes);        // signup, login, logout
app.use("/api/protected", protectedRoutes); // secured routes

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
