const { postService } = require('../services');

const addPost = async (req, res, next) => {
  try {
    const { id } = req.user;

    console.log(id);

    const result = await postService.addPost(req.body, id);
    
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addPost,
};