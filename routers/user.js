const { Router } = require('express');
const {userSignup} = require('../src/controllers')
const User = require('../db/models/Users')
const router = Router();

router.get('/', async (req, res) => {
const findUser = await User.findById
  res.render('profile');
});

router.post('/signup/', userSignup);


module.exports = router;
