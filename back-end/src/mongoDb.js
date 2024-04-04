// create a connection for mongoDb with mongoose
const mongoose = require('mongoose');
const mongoDb = 'mongodb://localhost:27017/threeo';

async function createConnection() {
  await mongoose.connect(mongoDb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = createConnection;
