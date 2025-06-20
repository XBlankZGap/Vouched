const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

// sample protected route
router.get("/dashboard", authMiddleware, (req, res) => {
  res.json({
    message: "Welcome to your dashboard",
    userId: req.user.id, // added by the middleware
  });
});

module.exports = router;
