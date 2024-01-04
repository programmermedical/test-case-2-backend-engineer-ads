/* eslint-disable linebreak-style */
const Models = require('../models/database.models');

Models.Categories.create({
  name: 'Elektronik',
});
Models.Categories.create({
  name: 'Fashion Pria',
});
Models.Categories.create({
  name: 'Fashion Wanita',
});
Models.Categories.create({
  name: 'Handphone & Tablet',
});
Models.Categories.create({
  name: 'Olahraga',
});

// npm run start
// npm run seed in other shell
