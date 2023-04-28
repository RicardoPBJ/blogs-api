const { errorContent, authenticate } = require('../utils');
const models = require('../models');

const loginUser = async ({ email, _password }) => {
  const loginSearch = await models.User.findOne({
    where: { email },
    attributes: ['email'],
  });

  if (!loginSearch) throw errorContent(400, 'Invalid fields');

  const token = authenticate.generateToken(email);

  return token;
};

module.exports = {
  loginUser,
};