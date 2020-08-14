// import path
const path = require('path');

// import express module
const express = require('express');

// import product controller
const productsController = require('../controllers/product');

// get router
const router = express.Router();

// listen user type url /
router.get('/', productsController.getProducts);

// export router
module.exports = router;
