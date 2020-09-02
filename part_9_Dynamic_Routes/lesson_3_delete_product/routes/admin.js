// import path
const path = require('path');

// import express module
const express = require('express');

// import admin controller
const adminController = require('../controllers/admin');

// get router
const router = express.Router();

// /admin/add-product => GET // listen user type url add-product
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST // handler add-product
router.post('/add-product', adminController.postAddProduct);

// get edit product info
router.get('/edit-product/:productId', adminController.getEditProduct);

// post edit product
router.post('/edit-product', adminController.postEditProduct);

// post delete product
router.post('/delete-product', adminController.postDeleteProduct);

// export router
module.exports= router;
