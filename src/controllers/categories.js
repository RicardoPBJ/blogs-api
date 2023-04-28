const { categoriesService } = require('../services');

const addCategories = async (req, res, next) => {
  try {
    const result = await categoriesService.addCategories(req.body);
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const getAllCategories = async (_req, res, next) => {
  try {
    const result = await categoriesService.getAllCategories();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addCategories,
  getAllCategories,
};