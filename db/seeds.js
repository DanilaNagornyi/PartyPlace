const mongoose = require('mongoose');
const Users = require('./models/Users');
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

async function usreSeeder() {
  await Users.deleteMany();
  await Users.insertMany(users);
  await mongoose.disconnect();
}

usreSeeder();
