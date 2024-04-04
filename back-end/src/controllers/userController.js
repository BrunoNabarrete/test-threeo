const express = require('express');
const userModel = require('../models/usersModel');

const router = express.Router();

router.post('/user', async (req, res) => {
  try {
    const user = new userModel(req.body);
    const { password, ...entity } = await user.save();
    res.status(201).json(entity);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;