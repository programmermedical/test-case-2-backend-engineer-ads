/* eslint-disable linebreak-style */
/* eslint-disable global-require */
/* eslint-disable camelcase */
const Sequelize = require('sequelize');

const db_testCase = require('../config/database.config');

const { DataTypes } = Sequelize;

class Models {
  static Products = db_testCase.define('products', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    price: DataTypes.NUMERIC,
    // price: DataTypes.STRING,
  });

  static Categories = db_testCase.define('categories', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
  });

  static ProductAssets = db_testCase.define('productAssets', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    image: DataTypes.STRING,
  });
}

Models.Categories.hasMany(Models.Products);
Models.Products.belongsTo(Models.Categories);

Models.Products.hasMany(Models.ProductAssets);
Models.ProductAssets.belongsTo(Models.Products);

(async () => {
  db_testCase.sync();
})();

module.exports = Models;
