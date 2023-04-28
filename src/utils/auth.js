const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secret';
console.log(process.env.JWT_SECRET);
const jwtConfig = {
  algorithm: 'HS256',
};

const generateToken = async (payload) => {
  const token = jwt.sign(payload, secret, jwtConfig);
  console.log(token);
  return token;
};

module.exports = {
  generateToken,
};