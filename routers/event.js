const { Router } = require('express');
const Event = require('../db/models/Events');
const router = Router();

router.get('/', async (req, res) => {
  res.render('event');
});

// вызов формы создания мероприятия
router.get('/addplace', async (req, res) => {
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
  const newEvent = await Event.findById(req.params.id)

  res.render('event', { newEvent });
});



module.exports = router;
