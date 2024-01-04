/* eslint-disable linebreak-style */
const express = require('express');
const ProductAssets = require('../controllers/productAssets.controller');

const route = express.Router();

route.get('/', ProductAssets.getAssets);
route.post('/', ProductAssets.postAssets);
route.put('/:id', ProductAssets.updateAssets);
route.delete('/:id', ProductAssets.deleteAssets);
route.get('/detail', ProductAssets.getAllAssets);

module.exports = route;
