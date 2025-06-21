const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema({
  token: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  userAgent: String,
  ip: String,
});

module.exports = mongoose.model("Token", tokenSchema);
