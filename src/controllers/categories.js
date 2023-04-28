const { categoriesService } = require('../services');

const addCategories = async (req, res, next) => {
  try {
    const result = await categoriesService.addCategories(req.body);
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addCategories,
};