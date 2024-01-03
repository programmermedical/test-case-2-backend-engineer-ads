/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
const db_testCase = require('../config/configDatabase');

const Products = require('./products_models');

const Categories = require('./categories_models');

const ProductAssets = require('./products_assets_models');

Categories.hasMany(Products);
Products.belongsTo(Categories);

Products.hasMany(ProductAssets);
ProductAssets.belongsTo(Products);

(async () => {
  db_testCase.sync();
})();

module.exports = {
  Products,
  Categories,
  ProductAssets,
};
