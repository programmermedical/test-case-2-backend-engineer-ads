/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
const Sequelize = require('sequelize');

const db_testCase = require('../config/configDatabase');

const { DataTypes } = Sequelize;

const ProductAssets = db_testCase.define('productAssets', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  image: DataTypes.STRING,
});

module.exports = ProductAssets;
