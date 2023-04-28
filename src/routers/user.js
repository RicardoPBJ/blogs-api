const express = require('express');
const { userController } = require('../controllers');
const { userVerify } = require('../middlewares');

const router = express.Router();

router.post('/', userVerify, userController.addUser);

module.exports = router;