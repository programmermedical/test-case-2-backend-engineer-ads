/* eslint-disable linebreak-style */
const Models = require('../models/database.models');

Models.Products.create({
  name: 'Logitech H111 Headset Stereo Single Jack 3.5mm',
  slug: 'logitech-h111-headset-stereo-single-jack-3-5mm', // menggunakan splitting untuk input ke database pada CRUD
  price: '80.000',
  categoryId: 1,
});
Models.Products.create({
  name: 'Philips Rice Cooker - Inner Pot 2L Bakuhanseki - HD3110/33',
  slug: 'philips-rice-cooker -inner-pot-2l-bakuhanseki-hd3110-33',
  price: '249.000',
  categoryId: 1,
});
Models.Products.create({
  name: 'Iphone 12 64Gb/128Gb/256Gb Garansi Resmi IBOX/TAM - Hitam, 64Gb',
  slug: 'iphone-12-64gb-128gb-256gb-garansi-resmi-ibox-tam-hitam-64gb',
  price: '11340000', // menggunakan splitting untuk input ke database pada CRUD untuk tipe data numerik
  categoryId: 4,
});
Models.Products.create({
  name: 'Papan alat bantu Push Up Rack Board Fitness Workout Gym',
  slug: 'papan-alat-bantu-push-up-rack-board-fitness-workout-gym',
  price: '90.000',
  categoryId: 5,
});
Models.Products.create({
  name: 'Jim Joker - Sandal Slide Kulit Pria Bold 2S Hitam - Hitam',
  slug: 'jim-joker-sandal-slide-kulit-pria-bold-2s-hitam-hitam',
  price: '305.000',
  categoryId: 2,
});

// npm run start
// npm run seed in other shell
