require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/volnadb');

app.listen(3000, () => {
  console.log('Привет, я сервер!');
});