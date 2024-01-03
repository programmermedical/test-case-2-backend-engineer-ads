/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
const Sequelize = require('sequelize');

const db_testCase = require('../config/configDatabase');

const { DataTypes } = Sequelize;

const Products = db_testCase.define('products', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
  slug: DataTypes.STRING,
  // price: DataTypes.NUMERIC,
  price: DataTypes.STRING,
});

module.exports = Products;
