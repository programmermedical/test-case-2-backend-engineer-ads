/* eslint-disable linebreak-style */
const Model = require('../models/database.models');

class Categories {
  static getAllCategories = async (req, res) => {
    try {
      const response = await Model.Categories.findAll();
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

  static postCategories = async (req, res) => {
    try {
      const response = await Model.Categories.create({
        name: req.body.name,
      });
      res.status(201).send({
        status: true,
        message: 'Category has been successfull created!!',
        data: response,
      });
    } catch (error) {
      res.status(404).json({
        status: false,
        message: error,
      });
    }
  };

  static updateCategories = async (req, res) => {
    try {
      const categoryId = req.params.id;
      const response = await Model.Categories.update({
        name: req.body.name,
      }, {
        where: {
          id: categoryId,
        },
      });
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
        message: error,
      });
    }
  };

  static deleteCategories = async (req, res) => {
    try {
      const categoryId = req.params.id;
      const response = await Model.Categories.destroy({
        where: {
          id: categoryId,
        },
      });
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
        message: error,
      });
    }
  };
}

module.exports = Categories;
