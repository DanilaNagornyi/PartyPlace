const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  title: String,
  description: String,
  cover: String,
});

module.exports = mongoose.model('places', placeSchema);
