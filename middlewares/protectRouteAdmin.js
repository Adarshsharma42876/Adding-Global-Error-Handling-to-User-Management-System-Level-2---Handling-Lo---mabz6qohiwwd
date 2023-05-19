const jwt = require('jsonwebtoken');

const JWT_SECRET = 'newtonSchool';

function protectAdminRoutes(req, res, next) {
    const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Authentication failed: Missing token.', status: "Error"});
  }

  try {
      const decodedToken = jwt.verify(token, JWT_SECRET);
    if (!['superadmin', 'admin'].includes(decodedToken.role)) {
      return res.status(403).json({ message: 'Authorization failed: User is not an admin.', status: "Error" });
    }
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Authentication failed: Invalid token.' , status: "Error"});
  }
}

// Export the middleware function
module.exports = protectAdminRoutes;