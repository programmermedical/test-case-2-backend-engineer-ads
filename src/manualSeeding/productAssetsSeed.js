/* eslint-disable linebreak-style */
const Models = require('../models/database.models');

const assets = async () => {
  await Models.ProductAssets.create({
    image: 'logitech-h111.png',
    productId: 1,
  });

  await Models.ProductAssets.create({
    image: 'logitech-h111-headset-stereo-single-jack-3-5mm.png',
    productId: 1,
  });

  await Models.ProductAssets.create({
    image: 'philips-rice-cooker-inner-pot-2l-bakuhanseki-hd3110-33.png',
    productId: 2,
  });

  await Models.ProductAssets.create({
    image: 'philips.png',
    productId: 2,
  });

  await Models.ProductAssets.create({
    image: 'philips-rice-cooker.png',
    productId: 2,
  });

  await Models.ProductAssets.create({
    image: 'iphone-12-64gb-128gb-256gb.png',
    productId: 3,
  });

  await Models.ProductAssets.create({
    image: 'papan-alat-bantu-push-up.png',
    productId: 4,
  });

  await Models.ProductAssets.create({
    image: 'jim-joker-sandal-slide-kulit-pria-bold-2s-hitam-hitam.png',
    productId: 5,
  });
};

assets();
// npm run start
// npm run seed in other shell
