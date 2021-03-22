const { Router } = require('express');
const User = require('../db/models/Users')
const userRouter = Router();
const { userSignupRender, userSignup, userSigninRender, userSignin, userSignout,
} = require('../src/controllers')

userRouter.get('/', async (req, res) => {
const findUser = await User.findById
  res.render('profile');
});

// router.post('/signup/', userSignup);

userRouter.route('/signup')
  .get(userSignupRender)
  .post(userSignup)

userRouter.route('/signin')
  .get(userSigninRender)
  .post(userSignin)

userRouter.route('/signout')
  .get(userSignout)

module.exports = userRouter


// module.exports = router;
