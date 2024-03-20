require('dotenv').config();

const express = require('express');

const app = express();
const mongoose = require('mongoose');

const cardsRouter = require('./routes/cards');

mongoose.connect('mongodb://127.0.0.1:27017/mestodb');

app.use('/cards', cardsRouter);

app.listen(3000, () => {
  console.log('Привет, я сервер!');
});
