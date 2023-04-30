const { errorContent, authenticate } = require('../utils');
const models = require('../models');

const loginUser = async ({ email, _password }) => {
  const user = await models.User.findOne({
    where: { email },
    attributes: { exclude: ['password'] },
  });

  if (!user) throw errorContent(400, 'Invalid fields');

  const payload = { email: user.email, id: user.id };
  
  const token = authenticate.generateToken(payload);

  return token;
};

module.exports = {
  loginUser,
};