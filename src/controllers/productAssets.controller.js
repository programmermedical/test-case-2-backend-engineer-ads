/* eslint-disable linebreak-style */
/* eslint-disable newline-per-chained-call */
/* eslint-disable no-unused-expressions */
const ProductAssetsServices = require('../services/productAssets.service');

class ProductAssetsController {
  static getAssets = async (req, res) => {
    try {
      const response = await ProductAssetsServices.findAllAssets();
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

  static postAssets = async (req, res) => {
    try {
      const response = await ProductAssetsServices.createAssets(req.body);
      res.status(201).send({
        status: true,
        message: 'Assets has been successfull created!!',
        data: response,
      });
    } catch (error) {
      res.status(404).json({
        status: false,
        message: error.message,
      });
    }
  };

  static updateAssets = async (req, res) => {
    try {
      const productAssetsId = req.params.id;
      const response = await ProductAssetsServices.updateAssets(productAssetsId, req.body);
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
      res.status(404).json({
        status: false,
        message: error.message,
      });
    }
  };

  static deleteAssets = async (req, res) => {
    try {
      const productAssetsId = req.params.id;
      const response = await ProductAssetsServices.destroyAssets(productAssetsId);
      const checkResponse = response.toString();
      if (checkResponse === '0') {
        res.status(400).send({
          status: false,
          message: `Assets with id ${productAssetsId} is not found!!`,
        });
      }
      res.status(200).send({
        status: true,
        message: 'Assets has been successfull deleted!!',
      });
    } catch (error) {
      res.status(404).json({
        status: false,
        message: error.message,
      });
    }
  };

  static getAllAssets = async (req, res) => {
    try {
      const response = await ProductAssetsServices.detailAllAssets();
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

module.exports = ProductAssetsController;
