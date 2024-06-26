const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
});

UserSchema.pre('save', async function(next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

module.exports = mongoose.model('User', UserSchema);
