/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable semi */
/* eslint-disable camelcase */
/* eslint-disable no-console */
const { Sequelize } = require('sequelize');

require('dotenv').config();

const db_testCase = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
  },
);

module.exports = db_testCase;

db_testCase.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});
