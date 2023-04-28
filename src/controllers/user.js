const { userService } = require('../services');

const addUser = async (req, res, next) => {
  try {
    const result = await userService.addUser(req.body);
    return res.status(201).json({ token: result });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addUser,
};