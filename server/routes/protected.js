// server/routes/protected.js
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

router.get("/some-data", authMiddleware, (req, res) => {
  res.json({
    message: "You accessed protected data!",
    userId: req.user.id,
  });
});

module.exports = router;
// This route is protected by the authMiddleware, which checks if the user is authenticated.
// If the user is authenticated, they can access the protected data.