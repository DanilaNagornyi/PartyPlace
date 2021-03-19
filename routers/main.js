const { Router } = require('express');
const Event = require('../db/models/Events');

const router = Router();

// главная ручка
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    // console.log(events);
    return res.render('main', { events });
  } catch (error) {
    return res.render('error', { message: 'Не удалось сохранить в базу' });
  }
});

// ручка регистрации
router.get('/registration', async (req, res) => {
  res.render('user/registr');
});

// ручка логина
router.get('/login', async (req, res) => {
  res.render('user/login');
});

// Форма создания события
router.get('/createevent', async (req, res) => {
  res.render('user/eventForm');
});

module.exports = router;
