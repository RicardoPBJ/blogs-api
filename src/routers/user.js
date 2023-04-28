const express = require('express');
const { userController } = require('../controllers');
const { userVerify } = require('../middlewares');
const tokenVerify = require('../middlewares/tokenVerify');

const router = express.Router();

router.post('/', userVerify, userController.addUser);
router.get('/', tokenVerify, userController.getAllUsers);
router.get('/:id', tokenVerify, userController.getUsersById);

module.exports = router;