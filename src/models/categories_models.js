/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
const Sequelize = require('sequelize');

const db_testCase = require('../config/configDatabase');

const { DataTypes } = Sequelize;

const Categories = db_testCase.define('categories', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
});

module.exports = Categories;
