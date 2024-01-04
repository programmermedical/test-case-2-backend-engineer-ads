/* eslint-disable linebreak-style */
/* eslint-disable newline-per-chained-call */
/* eslint-disable no-unused-expressions */
const Models = require('../models/database.models');

class ProductAssetsController {
  static getAllAssets = async (req, res) => {
    try {
      const response = await Models.ProductAssets.findAll({
        include: {
          model: Models.Products,
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

  static postAssets = async (req, res) => {
    try {
      const image = JSON.stringify(req.body.image).toLowerCase().split(/[ /,]+/).join('-');
      const imageparse = JSON.parse(image.split(/[-]+/).join('-'));
      const response = await Models.ProductAssets.create({
        image: imageparse,
        productId: req.body.productId,
      });
      res.status(201).send({
        status: true,
        message: 'Assets has been successfull created!!',
        data: response,
      });
    } catch (error) {
      console.log(error);
    }
  };

  static updateAssets = async (req, res) => {
    try {
      const productAssetsId = req.params.id;
      const image = JSON.stringify(req.body.image).toLowerCase().split(/[ ./,]+/).join('-');
      const imageparse = JSON.parse(image.split(/[-]+/).join('-'));
      const response = await Models.ProductAssets.update({
        image: imageparse,
        productId: req.body.productId,
      }, {
        where: {
          id: productAssetsId,
        },
      });
      const checkResponse = response.toString();
      if (checkResponse === '0') {
        res.status(400).send({
          status: false,
          message: `Assets with id ${productAssetsId} is not found!!`,
        });
      }
      res.status(201).send({
        status: true,
        message: 'Assets has been success updated!!',
      });
    } catch (error) {
      console.log(error);
    }
  };

  static deleteAssets = async (req, res) => {
    try {
      const assetsId = req.params.id;
      const response = await Models.ProductAssets.destroy({
        where: {
          id: assetsId,
        },
      });
      const checkResponse = response.toString();
      if (checkResponse === '0') {
        res.status(400).send({
          status: false,
          message: `Assets with id ${assetsId} is not found!!`,
        });
      }
      res.status(200).send({
        status: true,
        message: 'Assets has been successfull deleted!!',
      });
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = ProductAssetsController;
