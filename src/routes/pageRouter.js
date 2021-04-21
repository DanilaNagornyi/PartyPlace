const { Router } = require('express');
const { checkAuth } = require('../checkAuth');

const pageRouter = Router();

pageRouter.get('/', (req, res) => res.render('main'));

module.exports = pageRouter;
