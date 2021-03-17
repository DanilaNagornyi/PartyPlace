// const mongoose = require("mongoose");
// const Books = require("./models/Books");
// const shortOption = require("./config");

// mongoose.connect("mongodb://localhost:27017/library", shortOption, () => {
//   console.log("DB connected!");
// });

// const books = [
//   {
//     title: "Книга",
//     description: "Нигга",
//     cover: "Обложка",
//   },
//   {
//     title: "Самоучитель по внутренней борьбе",
//     description: "Да",
//     cover: "Картинка",
//   },
//   {
//     title: "Книга о Джунглях",
//     description: "Нигга Осама Фарпар",
//     cover: "Обложка",
//   },
//   {
//     title: "Самоучитель по JS",
//     description: "Да !!!",
//     cover: "Картинка 22",
//   },
// ];

// async function seeder() {
//   await Books.deleteMany();
//   await Books.insertMany(books);
//   await mongoose.disconnect();
// }

// seeder();
