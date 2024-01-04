/* eslint-disable linebreak-style */
const express = require('express');
const productRoutes = require('./product.routes');
const productAssetsRoutes = require('./productAssets.routes');
const categories = require('./categories.routes');

const app = express();

app.get('/', async (req, res) => {
  try {
    res.send('this is homepage');
  } catch (error) {
    console.log(error);
  }
});

app.use('/products', productRoutes);
app.use('/assets', productAssetsRoutes);
app.use('/categories', categories);

const routes = app;

module.exports = routes;
