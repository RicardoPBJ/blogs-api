const jwt = require('jsonwebtoken');
const { errorContent } = require('../utils');

module.exports = ({ headers: { authorization } }, _res, next) => {
  if (!authorization) throw errorContent(401, 'Token not found');

  jwt.verify(authorization, process.env.JWT_SECRET, (error) => {
    if (error) throw errorContent(401, 'Expired or invalid token');
  });

  next();
};
