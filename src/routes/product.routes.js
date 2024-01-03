/* eslint-disable linebreak-style */
const express = require('express');

const route = express.Router();

const ProductController = require('../controllers/productsController');

route.get('/product', ProductController.getAllProducts);

route.post('/product', ProductController.postProduct);

route.put('/product/:id', ProductController.updateProduct);

route.delete('/product/:id', ProductController.deleteProduct);

module.exports = route;
