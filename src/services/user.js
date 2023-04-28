const { errorContent, authenticate } = require('../utils');
const models = require('../models');

const addUser = async (body) => {
  const { displayName, email, password, image } = body;
  const loginSearch = await models.User.findOne({
    where: { email },
    attributes: ['email'],
  });

  if (loginSearch) throw errorContent(409, 'User already registered');

  await models.User.create({ displayName, email, password, image }); 

  const token = authenticate.generateToken(email);

  return token;
};

const getAllUsers = async () => {
  const result = await models.User.findAll({
    attributes: { exclude: 'password' },
  });
  return result;
};

module.exports = {
  addUser,
  getAllUsers,
};