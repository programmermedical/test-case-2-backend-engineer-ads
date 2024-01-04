/* eslint-disable linebreak-style */
const Models = require('../models/database.models');

class ProductAssetsServices {
  static async findAllAssets() {
    const getAssets = await Models.ProductAssets.findAll({
      attributes: ['id', 'image', 'createdAt', 'updatedAt'],
    });
    return getAssets;
  }

  static async createAssets(data) {
    const image = JSON.stringify(data.image).toLowerCase().split(/[ /,]+/).join('-');
    const imageparse = JSON.parse(image.split(/[-]+/).join('-'));
    const postAssets = await Models.ProductAssets.create({
      image: imageparse,
      productId: data.productId,
    });
    return postAssets;
  }

  static async updateAssets(productAssetsId, data) {
    const image = JSON.stringify(data.image).toLowerCase().split(/[ ./,]+/).join('-');
    const imageparse = JSON.parse(image.split(/[-]+/).join('-'));
    const editAssets = await Models.ProductAssets.update({
      image: imageparse,
      productId: data.productId,
    }, {
      where: {
        id: productAssetsId,
      },
    });
    return editAssets;
  }

  static async destroyAssets(productAssetsId) {
    const deleteAssets = await Models.ProductAssets.destroy({
      where: {
        id: productAssetsId,
      },
    });
    return deleteAssets;
  }

  static async detailAllAssets() {
    const getAllAssets = await Models.ProductAssets.findAll({
      attributes: ['id', 'image', 'createdAt', 'updatedAt'],
      include: {
        model: Models.Products,
        attributes: ['id', 'name', 'slug', 'price'],
      },
    });
    return getAllAssets;
  }
}

module.exports = ProductAssetsServices;
