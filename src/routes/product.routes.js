/* eslint-disable linebreak-style */
const express = require('express');

const route = express.Router();

const ProductController = require('../controllers/products.controller');

route.get('/', ProductController.getAllProducts);

route.post('/', ProductController.postProduct);

route.put('/:id', ProductController.updateProduct);

route.delete('/:id', ProductController.deleteProduct);

module.exports = route;
