/* eslint-disable linebreak-style */
const express = require('express');
const productRoutes = require('./product.routes');
const productAssetsRoutes = require('./productAssets.routes');

const app = express();

app.get('/', async (req, res) => {
  try {
    res.send('this is homepage');
  } catch (error) {
    console.log(error);
  }
});

app.use('/product', productRoutes);
app.use('/assets', productAssetsRoutes);

const routes = app;

module.exports = routes;
