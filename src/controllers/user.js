const { userService } = require('../services');

const addUser = async (req, res, next) => {
  try {
    const result = await userService.addUser(req.body);
    return res.status(201).json({ token: result });
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (_req, res, next) => {
  try {
    const result = await userService.getAllUsers();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getUsersById = async (req, res, next) => {
  try {
    const { params: { id } } = req;
    const result = await userService.getUsersById(id);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const deleteUsersById = async ({ user }, res, next) => {
  try {
    await userService.deleteUsersById(user.id);
    return res.status(204).json();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addUser,
  getAllUsers,
  getUsersById,
  deleteUsersById,
};