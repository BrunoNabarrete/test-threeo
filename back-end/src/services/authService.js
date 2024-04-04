const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userModel = require('../models/usersModel');

function hashPassword(password) {
  return bcrypt.hashSync(password, 10);
}

function generateToken(user) {
  return jwt.sign(user, 'segredo', { expiresIn: '1h' });
}

async function authenticate({ email, password }) {
  // Busca o usuário pelo email
  const user = await userModel.findOne({ email });

  // Verifica se o usuário foi encontrado
  if (!user) return null;

  // Compara a senha fornecida com a senha armazenada no banco de dados
  const isPasswordValid = await bcrypt.compare(password, user.password);

  // Se as senhas não coincidirem, retorna null
  if (!isPasswordValid) return null;

  // Gera um token JWT com informações relevantes do usuário
  const token = generateToken({ userId: user._id, email: user.email });
  
  // Retorna o usuário e o token
  return { user, token };
}



module.exports = { authenticate, generateToken };
