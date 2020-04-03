const jwt = require('jsonwebtoken');
const auth = (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) {
    return res.send('access denied');
  }

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.send('Invalid token');
  }
};

module.exports = auth;
