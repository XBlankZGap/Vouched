const requireRole = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).json({ message: "Access denied: Admins only" });
    }
    next();
  };
};

module.exports = requireRole;
// This middleware checks if the user has the required role.
// If not, it responds with a 403 Forbidden status and an error message.