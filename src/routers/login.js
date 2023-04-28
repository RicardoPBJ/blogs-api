const express = require('express');
const { loginController } = require('../controllers');
const { loginVerify } = require('../middlewares');

const router = express.Router();

router.post('/', loginVerify, loginController.loginUser);

module.exports = router;