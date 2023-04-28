const { categoriesSchema } = require('../joi/schemas');

module.exports = (req, res, next) => {
  const { error } = categoriesSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};