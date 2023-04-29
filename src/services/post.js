const { errorContent } = require('../utils');
const models = require('../models');

const addPost = async ({ title, content, categoryIds }, { user }) => {
  const categories = await models.Category.findAll({ where: { id: categoryIds } });

  console.log(categories);
  
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
    .map((id) => ({ postId: postCreation.id, id }));

  await models.PostCategory.bulkCreate(postCategories);
  
  console.log(postCreation);
  console.log(post);
  
  return postCreation;
};

module.exports = {
  addPost,
};