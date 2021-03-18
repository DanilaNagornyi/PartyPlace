const mongoose = require('mongoose');
const Users = require('./models/Users');
const Places = require('./models/Places');
const { shortOption, mongoUrl } = require('./config');

mongoose.connect(mongoUrl, shortOption, () => {
  console.log('DB connected!');
});

const users = [
  {
    firstName: 'Егор',
    lastName: 'Егоров',
    email: 'egor@mail.ru',
    password: '1234',
    group: 'Ежи',
    year: 2021,
    phoneNumber: 89998889911,
    locationTown: 'Москва',
    aboutMySelfInfo: 'Люблю пиво и котиков)',
  },
  {
    firstName: 'Аннушка',
    lastName: 'КотораяУжеРазлилаМасло',
    email: 'annet@mail.ru',
    password: '4321',
    group: 'ОПГ',
    year: 2020,
    phoneNumber: 89888449912,
    locationTown: 'Москва',
    aboutMySelfInfo: 'Люблю котиков и пиво)',
  },
];

const places = [
  {
    title: 'Macdonalds',
    photo: 'https://png.pngtree.com/png-clipart/20190515/original/pngtree-pin-sign-location-icon-png-image_3566350.jpg',
    description: 'Две мясных котлеты гриль, специальный соус сыр..... Ну вы поняли)',
    raiting: 55,
  },
  {
    title: 'Крошка Картошка',
    photo: 'https://png.pngtree.com/png-clipart/20190515/original/pngtree-pin-sign-location-icon-png-image_3566350.jpg',
    description: 'Откуда они берут такие огромные картофелины?!',
    raiting: 7,
  },
];

async function usersSeeder() {
  await Users.deleteMany();
  await Users.insertMany(users);
  await mongoose.disconnect();
}

async function placesSeeder() {
  await Places.deleteMany();
  await Places.insertMany(places);
  await mongoose.disconnect();
}

usersSeeder();
placesSeeder();
