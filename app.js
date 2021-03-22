const express = require('express');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo');
// const FileStore = require('session-file-store')(sessions)
const mongoose = require('mongoose');
require('dotenv').config();
const { mongoUrl, shortOption } = require('./db/config');
const User = require('./db/models/Users');
const mainRouter = require('./routers/main');
const userRouter = require('./routers/user');
const eventRouter = require('./routers/event');

const app = express();

app.use(
  session({
    secret: 'cat',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false },
    store: MongoStore.create({ mongoUrl }),
  }),
);

// const secretKey = 'cf95b6c5004fd0370529b8b6ee262fc99183f800e9bf6e5454b6d73725ce3567e625ac043326f2777d3b17a21e00d4b33dab26739b3f2de63d9506f17b228050'
// dbConnect()

app.set('view engine', 'hbs');
app.set('views', path.join(process.env.PWD, 'views'));
// app.set('cookieName', 'sid') // Устанавливаем в настройках сервера специальную переменную,
// // которая говорит, какое имя будут носить cookie

// app.use(sessions({
//   name: app.get('cookieName'),
//   secret: secretKey,
//   resave: false, // Не сохранять сессию, если мы ее не изменим
//   saveUninitialized: false, // не сохранять пустую сессию
//   // store: new FileStore({ // выбираем в качестве хранилища файловую систему
//   //   secret: secretKey,
//   // }),
//   store: MongoStore.create({ // выбираем в качестве хранилища mongoDB
//     mongoUrl: dbConnectionURL,
//   }),
//   cookie: { // настройки, необходимые для корректного работы cookie
//     // secure: true,
//     httpOnly: true, // не разрещаем модифицировать данную cookie через javascript
//     maxAge: 86400 * 1e3, // устанавливаем время жизни cookie
//   },
// }))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(async (req, res, next) => {
  const userId = req.session?.user?.id;
  // console.log(userId);
  // console.log(req.session);
  if (userId) {
    const currentUser = await User.findById(userId);
    // console.log(currentUser);
    if (currentUser) {
      res.locals.name = currentUser.firstName;
      res.locals.sername = currentUser.lastName;
      res.locals.email = currentUser.email;
      res.locals.phone = currentUser.phoneNumber;
      res.locals.city = currentUser.locationTown;
      res.locals.year = currentUser.locationTown;
      res.locals.city = currentUser.year;
      res.locals.url = currentUser.avatar;
      // console.log(res.locals.name, res.locals.email);
    }
  }
  next();
});

app.use(express.static(path.join(process.env.PWD, 'public')));

app.use('/', mainRouter);
app.use('/profile', userRouter);
app.use('/event', eventRouter);

app.get('/', (req, res) => res.render('Main'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server has started!');
  mongoose.connect(mongoUrl, shortOption, () => console.log('BASE is OK!!!'));
});
