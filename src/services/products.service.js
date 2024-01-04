/* eslint-disable linebreak-style */
/* eslint-disable radix */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
const Models = require('../models/database.models');

class ProductsServices {
  static async findAllProducts() {
    const getProducts = Models.Products.findAll({
      attributes: ['id', 'name', 'slug', 'price', 'createdAt', 'updatedAt'],
    });
    return getProducts;
  }

  static async createProducts(data) {
    const slug = JSON.stringify(data.name).toLowerCase().split(/[ ./,]+/).join('-');
    const slugparse = JSON.parse(slug.split(/[-]+/).join('-'));
    let _price = data.price;
    const parseprice = [JSON.stringify(_price)];
    const charPrice = parseprice.map((char) => char.length);
    if (parseInt(charPrice) > 9) {
      _price = JSON.parse(parseprice.toString().split('.').join(''));
    }
    const postProducts = Models.Products.create({
      name: data.name,
      slug: slugparse,
      price: _price,
      categoryId: data.categoryId,
    });
    return postProducts;
  }

  static async updateProducts(productId, data) {
    const slug = JSON.stringify(data.name).toLowerCase().split(/[ ./,]+/).join('-');
    const slugparse = JSON.parse(slug.split(/[-]+/).join('-'));
    let _price = data.price;
    const parseprice = [JSON.stringify(_price)];
    const charPrice = parseprice.map((char) => char.length);
    if (parseInt(charPrice) > 9) {
      _price = JSON.parse(parseprice.toString().split('.').join(''));
    }
    const editProducts = await Models.Products.update(
      {
        name: data.name,
        slug: slugparse,
        price: _price,
        categoryId: data.categoryId,
      },
      {
        where: {
          id: productId,
        },
      },
    );
    return editProducts;
  }

  static async destroyProducts(productsId) {
    const deleteProducts = await Models.Products.destroy({
      where: {
        id: productsId,
      },
    });
    return deleteProducts;
  }

  static async detailAllProducts(table, sort) {
    if (!table) {
      table = 'createdAt';
    }
    if (!sort) {
      sort = 'ASC';
    }
    const getAllProducts = await Models.Products.findAll({
      order: [
        [table, sort],
      ],
      attributes: ['id', 'name', 'slug', 'price', 'createdAt', 'updatedAt'],
      include: [{
        model: Models.Categories,
        attributes: ['id', 'name'],
      }, {
        model: Models.ProductAssets,
        attributes: ['id', 'image'],
      }],
    });
    return getAllProducts;
  }
}

module.exports = ProductsServices;
