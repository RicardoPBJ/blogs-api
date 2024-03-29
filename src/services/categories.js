// const { authenticate } = require('../utils');
const models = require('../models');

const addCategories = async ({ name }) => {
  await models.Category.create({ name });
  
  const result = await models.Category.findOne({
    where: { name },
  });

  return result;
};

const getAllCategories = async () => {
  const result = await models.Category.findAll();
  return result;
};

module.exports = {
  addCategories,
  getAllCategories,
};