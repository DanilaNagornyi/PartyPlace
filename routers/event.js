const { Router } = require('express');
const Event = require('../db/models/Events');
const Place = require('../db/models/Places');

const router = Router();

router.get('/', async (req, res) => {
  res.render('event');
});

// вызов формы создания мероприятия
router.get('/:id/addplace', async (req, res) => {
  res.render('user/placeForm');
});

// отправка формы в базу данных
// create event
router.post('/', async (req, res) => {
  console.log('post event');
  const {
    title,
    photo,
    description,
    location,
    participants,
    comments,
    place,
  } = req.body;
  try {
    const newEvent = await Event.create({
      title,
      description,
      photo,
      participants,
      comments,
      location,
      place,
      creator: req.session.userId,
    });
    return res.redirect(`/event/${newEvent._id}`);
  } catch (error) {
    console.log(error);
    return res.render('error', { message: 'Не удалось сохранить в базу' });
  }
});

router.get('/:id', async (req, res) => {
  const newEvent = await Event.findById(req.params.id);
  const places = await Place.find({ event: req.params.id });
  console.log('=========>>>>', places);
  res.render('event', { newEvent, places });
});

router.post('/:id/addplace/', async (req, res) => {
  // console.log('post event-places');
  const {
    title,
    photo,
    linkToPlace,
    description,
    geolocation,
    raiting,
    contacts,
  } = req.body;
  const { id: event } = req.params;
  // console.log('addplace ==========>', req.body);
  try {
    const newEvent = await Place.create({
      title,
      linkToPlace,
      photo,
      description,
      geolocation,
      raiting,
      event,
      contacts,
      creator: req.session.userId,
    });
    return res.redirect(`/event/${event}`);
  } catch (error) {
    console.log(error);
    return res.render('error', { message: 'Не удалось сохранить в базу' });
  }
});

// router.post('/:id/addplace', async (req, res) => {
//   const places = await Place.find({ event: req.params.id });
//   res.render('event', { places });
// });
module.exports = router;
