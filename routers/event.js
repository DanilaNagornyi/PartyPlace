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
    await Event.create({
      title,
      description,
      photo,
      participants,
      comments,
      location,
      place,
      creator: req.session.userId,
    });
    return res.redirect('/event/:id');
  } catch (error) {
    console.log(error);
    return res.render('error', { message: 'Не удалось сохранить в базу' });
  }
});

module.exports = router;
