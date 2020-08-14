// import path
const path = require('path');

// import express module
const express = require('express');

// import product controller
const productsController = require('../controllers/product');

// get router
const router = express.Router();

// /admin/add-product => GET // listen user type url add-product
router.get('/add-product', productsController.getAddProduct);

// /admin/add-product => POST // handler add-product
router.post('/add-product', productsController.postAddProduct);

// export router
module.exports= router;
