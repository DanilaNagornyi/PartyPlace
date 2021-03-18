const { Router } = require('express');

const router = Router();

router.get('/', async (req, res) => {
  res.render('profile');
});

module.exports = router;
