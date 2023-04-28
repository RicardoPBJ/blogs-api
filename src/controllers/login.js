const { loginService } = require('../services');

const loginUser = async (req, res, next) => {
  try {
    const result = await loginService.loginUser(req.body);
    return res.status(200).json({ token: result });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  loginUser,
};