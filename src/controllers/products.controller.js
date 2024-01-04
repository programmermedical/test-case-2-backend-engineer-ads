/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable newline-per-chained-call */
/* eslint-disable no-unused-expressions */
const Models = require('../models/database.models');

class ProductController {
  static getProducts = async (req, res) => {
    try {
      const response = await Models.Products.findAll({
        attributes: ['id', 'name', 'slug', 'price', 'createdAt', 'updatedAt'],
      });
      res.status(200).send({
        status: true,
        data: response,
      });
    } catch (error) {
      res.status(404).json({
        status: false,
        message: error,
      });
    }
  };

  static postProduct = async (req, res) => {
    try {
      const slug = JSON.stringify(req.body.name).toLowerCase().split(/[ ./,]+/).join('-');
      const slugparse = JSON.parse(slug.split(/[-]+/).join('-'));
      const response = await Models.Products.create({
        name: req.body.name,
        slug: slugparse,
        price: req.body.price,
        categoryId: req.body.category,
      });
      res.status(201).send({
        status: true,
        message: 'Product has been successfull created!!',
        data: response,
      });
    } catch (error) {
      res.status(404).json({
        status: false,
        message: error,
      });
    }
  };

  static updateProduct = async (req, res) => {
    try {
      const productId = req.params.id;
      const slug = JSON.stringify(req.body.name).toLowerCase().split(/[ ./,]+/).join('-');
      const slugparse = JSON.parse(slug.split(/[-]+/).join('-'));
      const response = await Models.Products.update(
        {
          name: req.body.name,
          slug: slugparse,
          price: req.body.price,
          categoryId: req.body.category,
        },
        {
          where: {
            id: productId,
          },
        },
      );
      const checkResponse = response.toString();
      if (checkResponse === '0') {
        res.status(400).send({
          status: false,
          message: `Product with id ${productId} is not found!!`,
        });
      }
      res.status(201).send({
        status: true,
        message: 'Product has been success updated!!',
      });
    } catch (error) {
      res.status(404).json({
        status: false,
        message: error,
      });
    }
  };

  static deleteProduct = async (req, res) => {
    try {
      const productId = req.params.id;
      const response = await Models.Products.destroy({
        where: {
          id: productId,
        },
      });
      const checkResponse = response.toString();
      if (checkResponse === '0') {
        res.status(400).send({
          status: false,
          message: `Product with id ${productId} is not found!!`,
        });
      }
      res.status(200).send({
        status: true,
        message: 'Product has been successfull deleted!!',
      });
    } catch (error) {
      res.status(404).json({
        status: false,
        message: error,
      });
    }
  };

  static getAllProducts = async (req, res) => {
    try {
      let _table = req.params.table;
      let _sort = req.params.sort;

      if (!_table) {
        _table = 'createdAt';
      }
      if (!_sort) {
        _sort = 'DESC';
      }
      const response = await Models.Products.findAll({
        order: [
          [_table, _sort],
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
      res.status(200).send({
        status: true,
        data: response,
      });
    } catch (error) {
      res.status(404).json({
        status: false,
        message: error,
      });
    }
  };
}

module.exports = ProductController;
