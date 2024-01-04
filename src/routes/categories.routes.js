/* eslint-disable linebreak-style */
const express = require('express');
const Categories = require('../controllers/categories.controller');

const route = express.Router();

route.get('/', Categories.getAllCategories);

route.post('/', Categories.postCategories);

route.put('/:id', Categories.updateCategories);

route.delete('/:id', Categories.deleteCategories);

module.exports = route;
