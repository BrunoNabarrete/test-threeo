const express = require('express');
const mathService = require('../services/mathService');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();
// router.use(authMiddleware); por algum motivo ele está aplicando em todos endpoints

router.post('/', (req, res) => {
  const { num1, num2, operacao } = req.body;
  try {
    const resultado = mathService.calcularOperacao(num1, num2, operacao);
    res.json({ resultado });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;