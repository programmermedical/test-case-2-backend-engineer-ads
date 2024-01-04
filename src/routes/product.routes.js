/* eslint-disable linebreak-style */
const express = require('express');

const route = express.Router();

const ProductController = require('../controllers/products.controller');

route.get('/', ProductController.getProducts);

route.get('/:table=:sort', ProductController.getAllProducts);

route.post('/', ProductController.postProduct);

route.put('/:id', ProductController.updateProduct);

route.delete('/:id', ProductController.deleteProduct);

route.get('/detail', ProductController.getAllProducts);

module.exports = route;
