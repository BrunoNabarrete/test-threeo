const mathService = require('../services/mathService');

function realizarOperacao(req, res) {
  const { num1, num2, operacao } = req.body;
  try {
    const resultado = mathService.calcularOperacao(num1, num2, operacao);
    res.json({ resultado });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = { realizarOperacao };
