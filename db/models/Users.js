const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  pass: {
    type: String,
    required: true,
  },
  group: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  avatar: {
    type: String,
    default:
      'https://www.pinclipart.com/picdir/big/416-4160500_you-wont-have-any-technical-issues-to-deal.png',
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  locationTown: {
    type: String,
    required: true,
  },
  aboutMySelfInfo: String,
  createdEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'events' }],
  invitationsToEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'events' }],
  plannedToVisitEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'events' }],
  visitedEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'events' }],
  required: false,
});

const User = mongoose.model('users', usersSchema);
module.exports = User;
