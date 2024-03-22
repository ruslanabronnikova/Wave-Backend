require('dotenv').config();

const express = require('express');

const app = express();
const mongoose = require('mongoose');

const cardsRouter = require('./routes/cards');
const usersRouter = require('./routes/users');
const { createUser, loginUser } = require('./controllers/users');

mongoose.connect('mongodb://127.0.0.1:27017/mestodb');

app.use('/users', usersRouter);
app.use('/cards', cardsRouter);

app.listen(3000, () => {
  console.log('Привет, я сервер!');
});
