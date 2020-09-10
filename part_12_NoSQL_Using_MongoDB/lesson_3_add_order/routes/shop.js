// import path
const path = require('path');

// import express module
const express = require('express');

// import shop controller
const shopController = require('../controllers/shop');

// get router
const router = express.Router();

// listen user type url /
router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.post('/cart-delete-item', shopController.postCartDeleteProduct);

router.post('/create-order', shopController.postOrder);

// router.get('/orders', shopController.getOrders);

// export router
module.exports = router;
