const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

 function hashPassword(password) {
  return bcrypt.hashSync(password, 10);
 }

const users = [
  { id: 1, username: 'usuario', password: hashPassword('123456') }
];

function authenticate({ username, password }) {
  const user = users.find(u => u.username === username);
  if (!user) return null;
  if (bcrypt.compareSync(password, user.password)) {
    return { id: user.id, username: user.username };
  }
  return null;
}

function generateToken(user) {
  return jwt.sign(user, 'segredo', { expiresIn: '1h' });
}

module.exports = { authenticate, generateToken };
