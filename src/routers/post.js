const express = require('express');
const { postController } = require('../controllers');
const { postVerify } = require('../middlewares');
const tokenVerify = require('../middlewares/tokenVerify');

const router = express.Router();

router.post('/', tokenVerify, postVerify, postController.addPost);
router.get('/', tokenVerify, postController.getAllPosts);

module.exports = router;