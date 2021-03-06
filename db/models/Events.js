const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  photo: {
    type: String,
    default:
      'https://png.pngtree.com/png-clipart/20190515/original/pngtree-pin-sign-location-icon-png-image_3566350.jpg',
  },
  description: { type: String, required: true },
  location: {
    type: String,
    required: true,
  },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }],
  comments: [String],
  place: [{ type: mongoose.Schema.Types.ObjectId, ref: 'places' }],
  raiting: [Number],
  date: String,
  time: String,
});
const Event = mongoose.model('events', eventSchema);

module.exports = Event;
