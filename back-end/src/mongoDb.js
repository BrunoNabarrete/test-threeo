const mongoose = require('mongoose');
const mongoDb = process.env.MONGODB_CONNECTION;

async function createConnection() {
  await mongoose.connect(mongoDb);
};

module.exports = createConnection;
