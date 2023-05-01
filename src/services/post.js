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

const getPostById = async (userId) => {
  const result = await models.BlogPost.findOne({
    where: { id: userId },
    include: [
      { model: models.User, as: 'user', attributes: { exclude: ['password'] } },
      { model: models.Category, through: { attributes: [] }, as: 'categories' },
    ],  
  });
  if (!result) throw errorContent(404, 'Post does not exist');
  return result;
};

const editPostById = async ({ title, content }, _postId, userId) => {
  const [update] = await models.BlogPost.update({ title, content }, { where: { userId } }); 
  const result = await models.BlogPost.findOne({
    where: { id: userId },
    include: [
      { model: models.User, as: 'user', attributes: { exclude: ['password'] } },
      { model: models.Category, through: { attributes: [] }, as: 'categories' },
    ],  
  });
  if (!update) throw errorContent(401, 'Unauthorized user');
  return result;
};

const deletePostById = async (postId, userId) => {
  const findPost = await models.BlogPost.findOne({ where: { id: postId } });

  if (!findPost) throw errorContent(404, 'Post does not exist');
  
  const deletePost = await models.BlogPost.destroy({ where: { userId, id: postId } });

  if (!deletePost) throw errorContent(401, 'Unauthorized user');
};

module.exports = {
  addPost,
  getAllPosts,
  getPostById,
  editPostById,
  deletePostById,
};