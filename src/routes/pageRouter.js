const { Router } = require('express')
const { checkAuth } = require('../checkAuth')

const pageRouter = Router()

pageRouter.get('/', (req, res) => res.render('main'))

// pageRouter.get('/secret', checkAuth, (req, res) => res.render('secret'))

module.exports = pageRouter
