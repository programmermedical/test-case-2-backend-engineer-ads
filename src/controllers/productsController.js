/* eslint-disable linebreak-style */
/* eslint-disable newline-per-chained-call */
/* eslint-disable no-unused-expressions */
const { Products, Categories } = require('../models/models');

class ProductController {
  static getAllProducts = async (req, res) => {
    try {
      const response = await Products.findAll({
        include: {
          model: Categories,
        },
      });
      res.status(200).send({
        status: true,
        data: response,
      });
    } catch (error) {
      console.log('error');
    }
  };

  static postProduct = async (req, res) => {
    try {
      const slug = JSON.stringify(req.body.name).toLowerCase().split(/[ ./,]+/).join('-');
      const slugparse = JSON.parse(slug.split(/[-]+/).join('-'));
      const response = await Products.create({
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
      console.log(error);
    }
  };

  static updateProduct = async (req, res) => {
    try {
      const productId = req.params.id;
      const slug = JSON.stringify(req.body.name).toLowerCase().split(/[ ./,]+/).join('-');
      const slugparse = JSON.parse(slug.split(/[-]+/).join('-'));
      const response = await Products.update(
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
      console.log(error);
    }
  };

  static deleteProduct = async (req, res) => {
    try {
      const productId = req.params.id;
      const response = await Products.destroy({
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
      console.log(error);
    }
  };
}

module.exports = ProductController;
