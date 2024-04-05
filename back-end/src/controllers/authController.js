const express = require('express');
const authService = require('../services/authService');

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const info = await authService.authenticate({ email, password });
  if (info) {
    res.status(200).json(info);
  } else {
    res.status(401).json({ message: 'Credenciais inválidas' });
  }
});

module.exports = router;