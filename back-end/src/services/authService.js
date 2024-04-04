const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userModel = require('../models/usersModel');

function generateToken(user) {
  return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });
}

async function authenticate({ email, password }) {
  const user = await userModel.findOne({ email });

  if (!user) return null;
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) return null;
  const token = generateToken({ userId: user._id, email: user.email });
  
  return { user, token };
}



module.exports = { authenticate, generateToken };
