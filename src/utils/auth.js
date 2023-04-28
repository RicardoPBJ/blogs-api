const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secret';
const jwtConfig = {
  algorithm: 'HS256',
};

const generateToken = async (payload) => {
  const token = jwt.sign(payload, secret, jwtConfig);
  return token;
};

module.exports = {
  generateToken,
};