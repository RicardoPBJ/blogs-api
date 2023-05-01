const { updatePostSchema } = require('../joi/schemas');

module.exports = (req, res, next) => {
  const { error } = updatePostSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};