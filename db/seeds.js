const mongoose = require('mongoose');
const Users = require('./models/Users');
const Places = require('./models/Places');
const Events = require('./models/Events');

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
    createdEvents: [mongoose.Types.ObjectId('60534388832d255aa1018728')],
    // Приглашения пока пропущу
    plannedToVisitEvents: [mongoose.Types.ObjectId('60534388832d255aa1018728')],
    // Посещённые тоже
  },
];

const places = [
  {
    title: 'Macdonalds',
    photo:
      'https://png.pngtree.com/png-clipart/20190515/original/pngtree-pin-sign-location-icon-png-image_3566350.jpg',
    description:
      'Две мясных котлеты гриль, специальный соус сыр..... Ну вы поняли)',
    raiting: 55,
  },
  {
    title: 'Крошка Картошка',
    photo:
      'https://png.pngtree.com/png-clipart/20190515/original/pngtree-pin-sign-location-icon-png-image_3566350.jpg',
    description: 'Откуда они берут такие огромные картофелины?!',
    raiting: 7,
  },
];

const events = [
  {
    title: 'Выпускной вечер Ежей',
    photo:
      'https://png.pngtree.com/png-clipart/20190515/original/pngtree-pin-sign-location-icon-png-image_3566350.jpg',
    description: 'Ресторан Macdonalds',
    location: 'Москва, метро Чистые пруды',
    creator: mongoose.Types.ObjectId('605342eef12f8659c18f0387'),
    participants: [
      mongoose.Types.ObjectId('605342eef12f8659c18f0386'),
      mongoose.Types.ObjectId('605342eef12f8659c18f0387'),
    ],
    comments: 'Какой то комментарий',
    place: mongoose.Types.ObjectId('605342eef12f8659c18f0388'),
    raiting: 70,
  },
];

async function usersSeeder() {
  await Users.deleteMany();
  await Users.insertMany(users);
}

async function placesSeeder() {
  await Places.deleteMany();
  await Places.insertMany(places);
}

async function eventSeeder() {
  await Events.deleteMany();
  await Events.insertMany(events);
  await mongoose.disconnect();
}

async function foo() {
  const egor = await Users.findOne();
  egor.visitedEvents.push('6053627007f5ca7c106a28f7');
  egor.visitedEvents.save();
  await mongoose.disconnect();
}
