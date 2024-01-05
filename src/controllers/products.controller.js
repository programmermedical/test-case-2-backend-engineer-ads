/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable newline-per-chained-call */
/* eslint-disable no-unused-expressions */
const ProductsServices = require('../services/products.service');

class ProductController {
  static getProducts = async (req, res) => {
    try {
      const { table } = req.params;
      const { sort } = req.params;
      const response = await ProductsServices.findAllProducts(table, sort);
      res.status(200).send({
        status: true,
        data: response,
      });
    } catch (error) {
      res.status(404).json({
        status: false,
        message: error.message,
      });
    }
  };

  static postProduct = async (req, res) => {
    try {
      const response = await ProductsServices.createProducts(req.body);
      res.status(201).send({
        status: true,
        message: 'Product has been successfull created!!',
        data: response,
      });
    } catch (error) {
      res.status(404).json({
        status: false,
        message: error.message,
      });
    }
  };

  static updateProduct = async (req, res) => {
    try {
      const productId = req.params.id;
      const response = await ProductsServices.updateProducts(productId, req.body);
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
        message: error.message,
      });
    }
  };

  static deleteProduct = async (req, res) => {
    try {
      const productId = req.params.id;
      const response = await ProductsServices.destroyProducts(productId);
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
        message: error.message,
      });
    }
  };

  static getAllProducts = async (req, res) => {
    try {
      const response = await ProductsServices.detailAllProducts();
      res.status(200).send({
        status: true,
        data: response,
      });
    } catch (error) {
      res.status(404).json({
        status: false,
        message: error.message,
      });
    }
  };
}

module.exports = ProductController;
