const { postService } = require('../services');

const addPost = async (req, res, next) => {
  try {
    const { id } = req.user;

    const result = await postService.addPost(req.body, id);
    
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const getAllPosts = async ({ user }, res, next) => {
  try {
    console.log(user.id);
    const result = await postService.getAllPosts(user.id);
    
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addPost,
  getAllPosts,
};