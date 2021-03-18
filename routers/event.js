const { Router } = require('express');

const router = Router();

router.get('/', async (req, res) => {
  res.render('event');
});

router.get('/addplace', async (req, res) => {
  res.render('placeForm');
});



module.exports = router;


