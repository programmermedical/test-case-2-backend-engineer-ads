/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
const Models = require('../models/database.models');

class CategoriesServices {
  static async findAllCategories() {
    const getCategories = await Models.Categories.findAll();
    return getCategories;
  }

  static async createCategories(data) {
    const postCategories = await Models.Categories.create({
      name: data.name,
    });
    return postCategories;
  }

  static async updateCategories(categoryId, data) {
    const editCategories = await Models.Categories.update({
      name: data.name,
    }, {
      where: {
        id: categoryId,
      },
    });
    return editCategories;
  }

  static async destroyCategories(categoriesId) {
    const deleteCategories = await Models.Categories.destroy({
      where: {
        id: categoriesId,
      },
    });
    return deleteCategories;
  }
}

module.exports = CategoriesServices;
