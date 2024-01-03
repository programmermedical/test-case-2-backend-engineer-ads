/* eslint-disable linebreak-style */
const express = require('express');

const app = express();

app.get('/', async (req, res) => {
  try {
    res.send('this is homepage');
  } catch (error) {
    console.log(error);
  }
});

const route = require('./product.routes');

app.use('/', route);

const routes = app;

module.exports = routes;
