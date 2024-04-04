const authService = require('../services/authService');

function login(req, res) {
  const { username, password } = req.body;
  const user = authService.authenticate({ username, password });
  if (user) {
    const token = authService.generateToken(user);
    res.status(201).json({ token });
  } else {
    res.status(401).json({ message: 'Credenciais inválidas' });
  }
}

module.exports = { login };
