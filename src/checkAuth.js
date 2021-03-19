const checkAuth = (req, res, next) => {
  const userId = req.session?.user?.id

  if (userId) {
    return next()
  }

  return res.redirect('/registr/')
}

module.exports = {
  checkAuth,
}
