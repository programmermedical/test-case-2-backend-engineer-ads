/* eslint-disable linebreak-style */
const Models = require('../models/database.models');

const categories = async () => {
  await Models.Categories.create({
    name: 'Elektronik',
  });
  await Models.Categories.create({
    name: 'Fashion Pria',
  });
  await Models.Categories.create({
    name: 'Fashion Wanita',
  });
  await Models.Categories.create({
    name: 'Handphone & Tablet',
  });
  await Models.Categories.create({
    name: 'Olahraga',
  });
};

categories();
// npm run start
// npm run seed in other shell
