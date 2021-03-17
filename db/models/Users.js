const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: String,
  password: String,
  group: String,
  year: Number,
});

module.exports = mongoose.model('users', usersSchema);
