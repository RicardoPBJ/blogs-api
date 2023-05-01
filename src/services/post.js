const { errorContent } = require('../utils');
const models = require('../models');

const addPost = async ({ title, content, categoryIds }, user) => {
  const categories = await models.Category.findAll({ where: { id: categoryIds } });
  
  if (categoryIds.length !== categories.length) {
    throw errorContent(400, 'one or more "categoryIds" not found');
  }
  
  const post = {
    title,
    content,
    userId: user,
  };
  
  const postCreation = await models.BlogPost.create(post);
  
  const postCategories = categoryIds
    .map((id) => ({ postId: postCreation.id, categoryId: id }));

  await models.PostCategory.bulkCreate(postCategories);

  return postCreation.dataValues;
};

const getAllPosts = async (userId) => {
  const result = await models.BlogPost.findAll({
    where: { userId },
    include: [
      { model: models.User, as: 'user', attributes: { exclude: ['password'] } },
      { model: models.Category, through: { attributes: [] }, as: 'categories' },
    ],  
  });

  return result;
};

module.exports = {
  addPost,
  getAllPosts,
};