const express = require('express');
const { categoriesController } = require('../controllers');
const { categoriesVerify } = require('../middlewares');
const tokenVerify = require('../middlewares/tokenVerify');

const router = express.Router();

router.post('/', tokenVerify, categoriesVerify, categoriesController.addCategories);
// router.get('/', tokenVerify, categoriesController.getAllCategories);

module.exports = router;