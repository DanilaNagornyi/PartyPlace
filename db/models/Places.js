const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  linkToPlace: String,
  photo: {
    type: String,
    default:
      'https://png.pngtree.com/png-clipart/20190515/original/pngtree-pin-sign-location-icon-png-image_3566350.jpg',
  },
  description: { type: String, required: true },
  geolocation: String,
  raiting: [Number],
  event: { type: mongoose.Schema.Types.ObjectId, ref: 'events' },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
  contacts: String,
});

const Place = mongoose.model('places', placeSchema);

module.exports = Place;
