const jwt = require('jsonwebtoken');

function generateToken(payload) {
  return jwt.sign(payload, 'segredo', { expiresIn: '1h' });
}

function verifyToken(token) {
  try {
    return jwt.verify(token, 'segredo');
  } catch (err) {
    return null;
  }
}

module.exports = { generateToken, verifyToken };
