const shortOption = { useNewUrlParser: true, useUnifiedTopology: true };

const mongoUrl = process.env.DB_CONNECTION_ADRESS;

module.exports = { shortOption, mongoUrl };
