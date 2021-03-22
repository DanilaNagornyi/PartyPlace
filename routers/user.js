const { Router } = require('express');
const { userSignup } = require('../src/controllers');
const User = require('../db/models/Users');
const Event = require('../db/models/Events');
const router = Router();

router.get('/', async (req, res) => {
  // const findUser = await User.find(req.session?.user?.id);
  console.log('req.session?.user.id----->', req.session?.user.id);
  try {
    const events = await Event.find({ creator: req.session?.user.id });
    console.log('events----->', events);

    res.render('profile', { events });
  } catch (error) {
    return res.render('error', { message: 'Не удалось сохранить в базу' });
  }
});

router.post('/signup/', userSignup);

module.exports = router;
