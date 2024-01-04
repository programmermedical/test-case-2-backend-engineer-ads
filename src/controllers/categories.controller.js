/* eslint-disable linebreak-style */
const CategoriesServices = require('../services/categories.service');

class Categories {
  static getAllCategories = async (req, res) => {
    try {
      const response = await CategoriesServices.findAllCategories();
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

  static postCategories = async (req, res) => {
    try {
      const response = await CategoriesServices.createCategories(req.body);
      res.status(201).send({
        status: true,
        message: 'Category has been successfull created!!',
        data: response,
      });
    } catch (error) {
      res.status(404).json({
        status: false,
        message: error.message,
      });
    }
  };

  static updateCategories = async (req, res) => {
    try {
      const categoryId = req.params.id;
      const response = await CategoriesServices.updateCategories(categoryId, req.body);
      const checkResponse = response.toString();
      if (checkResponse === '0') {
        res.status(400).send({
          status: false,
          message: `Categories with id ${categoryId} not found!!`,
        });
      }
      res.status(200).send({
        status: true,
        message: 'Categories has been successfull updated!!',
      });
    } catch (error) {
      res.status(404).json({
        status: false,
        message: error.message,
      });
    }
  };

  static deleteCategories = async (req, res) => {
    try {
      const categoryId = req.params.id;
      const response = await CategoriesServices.destroyCategories(categoryId);
      const checkResponse = response.toString();
      if (checkResponse === '0') {
        res.status(400).send({
          status: false,
          message: `Categories with id ${categoryId} not found!!`,
        });
      }
      res.status(200).send({
        status: true,
        message: 'Categories has been successfull deleted!!',
      });
    } catch (error) {
      res.status(404).json({
        status: false,
        message: error.message,
      });
    }
  };
}

module.exports = Categories;
