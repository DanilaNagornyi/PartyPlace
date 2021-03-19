const express = require('express');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
require('dotenv').config();
const { mongoUrl, shortOption } = require('./db/config');

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

app.set('view engine', 'hbs');
app.set('views', path.join(process.env.PWD, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.env.PWD, 'public')));

app.use('/', mainRouter);
app.use('/profile', userRouter);
app.use('/event', eventRouter);

app.get('/', (req, res) => res.render('Main'));

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log('Server has started!');
  mongoose.connect(mongoUrl, shortOption, () => console.log('BASE is OK!!!'));
});
