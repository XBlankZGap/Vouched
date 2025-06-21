// server/routes/protected.js
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const requireRole = require("../middleware/requireRole");
const User = require("../models/User");

// Basic protected route
router.get("/some-data", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    res.json({
      message: "You accessed protected data!",
      user,
    });
  } catch (err) {
    console.error("Protected route error:", err);
    res.status(500).json({ message: "Failed to fetch protected data" });
  }
});

// Admin-only protected route
router.get("/admin-data", authMiddleware, requireRole("admin"), (req, res) => {
  res.json({ message: "This is admin-only data." });
});

module.exports = router;
