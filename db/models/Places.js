const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  photo: {
    type: String,
    default:
      'https://png.pngtree.com/png-clipart/20190515/original/pngtree-pin-sign-location-icon-png-image_3566350.jpg',
  },
  description: { type: String, required: true },
  raiting: [Number],
});

module.exports = mongoose.model('places', placeSchema);
