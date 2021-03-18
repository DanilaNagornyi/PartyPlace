const { Router } = require('express');

const router = Router();

// главная ручка
router.get('/', async (req, res) => {
  res.render('main');
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
