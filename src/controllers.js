const bcrypt = require('bcrypt');
const Users = require('../db/models/Users');

const saltRound = 10;

const userSigninRender = (req, res) => res.render('registr');

const userSignupRender = (req, res) => res.render('registr');

const userSignup = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    pass: plainPass,
    group,
    year,
    avatar,
    phoneNumber,
    locationTown,
  } = req.body;
  console.log(req.body);
  if (
    firstName &&
    lastName &&
    email &&
    plainPass &&
    group &&
    year &&
    avatar &&
    phoneNumber &&
    locationTown
  ) {
    const pass = await bcrypt.hash(plainPass, saltRound);
    const newUser = await Users.create({
      firstName,
      lastName,
      email,
      pass,
      group,
      year,
      avatar,
      phoneNumber,
      locationTown,
    });

    req.session.user = {
      id: newUser._id,
    };
    console.log(req.session.user);
    return res.redirect('/');
  }
  console.log('userSignup');

  return res.status(418).redirect('/registr/');
};

const userSignin = async (req, res) => {
  const {email, pass} = req.body;
  console.log('1', req.body);
  if (email && pass) {
    const currentUser = await Users.findOne( {email} )
    if (currentUser && (await bcrypt.compare(pass , currentUser.pass))) {
      req.session.user = {
        id: currentUser._id,
      };
      return res.redirect('/');
    }
    return res.status(418).redirect('user/registr/');
  }
  return res.status(418).redirect('user/registr/');
};

const userSignout = async (req, res) => {
  req.session.destroy ((err) => {
    if (err) return res.redirect('/')
  })

  res.clearCookie(req.app.get('cookieName'))
  return res.redirect('/')
}

module.exports = {
  userSigninRender,
  userSignupRender,
  userSignup,
  userSignin,
  userSignout,
};
