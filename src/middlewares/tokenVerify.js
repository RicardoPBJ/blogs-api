const jwt = require('jsonwebtoken');
const { errorContent } = require('../utils');

module.exports = (req, _res, next) => {
  const { headers: { authorization } } = req;
  
  if (!authorization) throw errorContent(401, 'Token not found');

  jwt.verify(authorization, process.env.JWT_SECRET, (error) => {
    if (error) throw errorContent(401, 'Expired or invalid token');
  });

  const decodedToken = jwt.verify(authorization, process.env.JWT_SECRET);

  req.user = decodedToken;

  next();
};
